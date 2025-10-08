/* ==========================================
   lang.js — i18n core (race-safe + HTML-safe)
   - 等 DOM 與 partials 載入後再套用
   - 支援 <strong>/<br> 等 HTML 片段
   - 表單 placeholder/value 亦可翻
   - MutationObserver：動態節點自動補翻
   - window.applyTranslations(lang)、window.reapplyI18n(lang)
   ========================================== */

(function () {
  const DEFAULT_LANG = "en";
  const VERSION = "1"; // 語言檔版本：改字後可+1，避免快取

  let booted = false;   // 防止重複初始化
  let currentDict = null;

  // 取得多語 JSON（避免快取）
  async function loadLang(lang) {
    const res = await fetch(`./lang/${lang}.json?v=${VERSION}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Language file not found: ${lang}`);
    return await res.json();
  }

  // 等待 DOM ready
  function onDOMReady() {
    if (document.readyState === "loading") {
      return new Promise((r) => document.addEventListener("DOMContentLoaded", r, { once: true }));
    }
    return Promise.resolve();
  }

  // 等待 include.js 注入的 header/footer（有 timeout）
  function waitPartials(timeout = 800) {
    return new Promise((resolve) => {
      let done = false;
      const t = setTimeout(() => { if (!done) resolve(); }, timeout);
      document.addEventListener(
        "partials:loaded",
        () => {
          if (!done) {
            done = true;
            clearTimeout(t);
            resolve();
          }
        },
        { once: true }
      );
    });
  }

  // 巢狀 key 解析（e.g. "hero.title"）
  function resolveKey(obj, path) {
    return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
  }

  // 將 JSON 字典套用到 [data-i18n] 元素（允許 HTML）
  function applyI18n(dict) {
    if (!dict) return;

    // 1) 通用：所有帶 data-i18n 的元素
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = resolveKey(dict, key);
      if (value == null) return;

      const tag = el.tagName;

      // 表單類：placeholder / value
      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) el.placeholder = value;
        else el.value = value;
        return;
      }
      if (tag === "SELECT") {
        // 若 select 本身有 data-i18n，多半不需處理；選項通常個別放 data-i18n
        return;
      }

      // 其他元素 — 允許安全 HTML（如 <strong>, <br>）
      el.innerHTML = value;
    });

    // 2) 選用：屬性翻譯（例如 data-i18n-attr="aria-label"）
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const attr = el.getAttribute("data-i18n-attr");
      const value = resolveKey(dict, key);
      if (value != null && attr) el.setAttribute(attr, value);
    });

    // 3) <option> 個別翻譯（若有）
    document.querySelectorAll("option[data-i18n]").forEach((opt) => {
      const key = opt.getAttribute("data-i18n");
      const value = resolveKey(dict, key);
      if (value != null) opt.textContent = value;
    });
  }

  // 重新套用（給語言切換器呼叫）
  async function reapplyI18n(lang) {
    try {
      localStorage.setItem("lang", lang);
      const dict = await loadLang(lang);
      currentDict = dict;
      applyI18n(currentDict);
      document.documentElement.setAttribute("lang", lang);
      console.log(`[i18n] Language applied: ${lang}`);
    } catch (err) {
      console.warn("[i18n] Failed to load new language:", err);
    }
  }

  // 主流程：載入 → 等 DOM/partials → 套用 → 監聽動態變化
  async function boot() {
    if (booted) return;
    booted = true;

    // 猜語言（localStorage > 瀏覽器）
    const saved = localStorage.getItem("lang");
    const browser = (navigator.language || "en").toLowerCase();
    const guess =
      saved ||
      (browser.startsWith("zh-tw")
        ? "zh-TW"
        : browser.startsWith("zh")
        ? "zh-CN"
        : browser.startsWith("ms")
        ? "ms"
        : "en");

    let langToUse = guess;

    try {
      // 同時等 DOM + partials
      await onDOMReady();
      await waitPartials();

      // 載入字典
      currentDict = await loadLang(langToUse);
      applyI18n(currentDict);
      document.documentElement.setAttribute("lang", langToUse);
      localStorage.setItem("lang", langToUse);
      console.log(`[i18n] Language applied: ${langToUse}`);
    } catch (err) {
      console.warn("[i18n] Error loading language, fallback to default:", err);
      if (langToUse !== DEFAULT_LANG) {
        try {
          currentDict = await loadLang(DEFAULT_LANG);
          applyI18n(currentDict);
          document.documentElement.setAttribute("lang", DEFAULT_LANG);
          localStorage.setItem("lang", DEFAULT_LANG);
        } catch (e2) {
          console.error("[i18n] Fallback language failed:", e2);
        }
      }
    }

    // 部分頁面在 boot 後才載入 partials：再補套一次
    document.addEventListener("partials:loaded", () => {
      if (currentDict) applyI18n(currentDict);
    });

    // 監控動態插入（含 header/footer 或你之後 append 的模組）
    const mo = new MutationObserver((muts) => {
      if (!currentDict) return;
      for (const m of muts) {
        for (const n of m.addedNodes) {
          if (
            n.nodeType === 1 &&
            (n.matches?.("[data-i18n]") || n.querySelector?.("[data-i18n]"))
          ) {
            applyI18n(currentDict);
            return;
          }
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // 暴露到全域，給 lang-dropdown.js 使用
    window.applyTranslations = reapplyI18n;
    window.reapplyI18n = reapplyI18n;
  }

  // 開機
  boot();
})();