/* ==========================================
   lang.js — 多語言切換核心 (穩定整合版)
   - 讀取 ./lang/{code}.json
   - 將字典存到 window.i18nDict，並套用到 data-i18n
   - 發送 "i18n:changed" 事件給像 brand-modal.js 等模組
   - 處理 placeholder / innerHTML / 本地記憶 / 競態
   ========================================== */

(() => {
  const DEFAULT_LANG = "en";
  const LANG_STORAGE_KEY = "lang";
  let currentLang = null;
  let currentController = null; // AbortController 防競態

  // ---------- 小工具 ----------
  const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  function resolveKey(obj, path) {
    return path.split(".").reduce((acc, k) => (acc != null ? acc[k] : undefined), obj);
  }

  // 對外公開：取字（給其他模組使用，如 brand-modal）
  // 用法：window.t("home_hero.title", "fallback")
  window.t = function t(key, fallback = "") {
    const dict = window.i18nDict || {};
    const val = resolveKey(dict, key);
    return (val === undefined || val === null) ? fallback : val;
  };

  // ---------- 將字典套用到 DOM ----------
  function applyI18n(dict) {
    if (!dict) return;

    // 1) <html lang="...">
    if (currentLang) {
      document.documentElement.setAttribute("lang", currentLang);
    }

    // 2) 所有 data-i18n 元素
    $all("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      const value = resolveKey(dict, key);
      if (value == null) return;

      const tag = el.tagName;

      // 表單元素與 placeholder
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", value);
        } else if (tag !== "SELECT") {
          // SELECT 通常不直接覆寫 value，避免破壞選取
          el.value = value;
        }
        return;
      }

      // 若字串帶有簡單 HTML 標籤，使用 innerHTML；否則用 textContent
      // 你若需要更嚴格可加白名單過濾
      if (typeof value === "string" && /<\/?[a-z][\s\S]*>/i.test(value)) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
  }

  // ---------- 載入與切換 ----------
  async function loadLangDict(code) {
    // 中斷上一個請求
    if (currentController) currentController.abort();
    currentController = new AbortController();

    // 加版本亂數避免離線快取造成「有時翻、有時不翻」
    const url = `./lang/${code}.json?v=${Date.now()}`;

    const res = await fetch(url, { signal: currentController.signal, cache: "no-store" });
    if (!res.ok) throw new Error(`Language file not found: ${code}`);
    const json = await res.json();
    return json;
  }

  async function applyTranslations(langCode) {
    const code = langCode || localStorage.getItem(LANG_STORAGE_KEY) || guessBrowserLang() || DEFAULT_LANG;

    try {
      const dict = await loadLangDict(code);

      // 存到全域，給其他模組（如 brand-modal.js）即時讀取
      window.i18nDict = dict;
      currentLang = code;

      // 套用翻譯
      applyI18n(dict);

      // 記住選擇
      localStorage.setItem(LANG_STORAGE_KEY, code);

      // 廣播事件給其他模組（brand-modal 會收到並重渲染）
      document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: code } }));

      console.log(`[i18n] applied: ${code}`);
    } catch (err) {
      console.warn("[i18n] Error loading language, fallback to default:", err);

      if (code !== DEFAULT_LANG) {
        // 回退到預設語言
        try {
          const dict = await loadLangDict(DEFAULT_LANG);
          window.i18nDict = dict;
          currentLang = DEFAULT_LANG;
          applyI18n(dict);
          localStorage.setItem(LANG_STORAGE_KEY, DEFAULT_LANG);
          document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: DEFAULT_LANG } }));
          console.log("[i18n] fallback applied: en");
        } catch (err2) {
          console.error("[i18n] fallback failed:", err2);
        }
      }
    }
  }

  // ---------- 語言猜測 ----------
  function guessBrowserLang() {
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("zh-tw")) return "zh-TW";
    if (nav.startsWith("zh")) return "zh-CN";
    if (nav.startsWith("ms")) return "ms";
    return "en";
  }

  // ---------- 對外 API ----------
  // 你可在語言切換按鈕那邊直接呼叫 window.applyTranslations('zh-TW')
  window.applyTranslations = applyTranslations;

  // ---------- 初始化 ----------
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    const first = saved || guessBrowserLang() || DEFAULT_LANG;
    applyTranslations(first);
  });
})();