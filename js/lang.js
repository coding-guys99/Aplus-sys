/* ==========================================
   lang.js — 多語言切換核心
   ========================================== */

window.applyTranslations = function (langCode) {
  const defaultLang = "en";
  const lang = langCode || localStorage.getItem("lang") || defaultLang;

  // 載入 JSON 檔（例如：/lang/en.json）
  fetch(`./lang/${lang}.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`找不到語言檔：${lang}`);
      return res.json();
    })
    .then((dict) => {
      applyI18n(dict);
      document.documentElement.setAttribute("lang", lang);
      localStorage.setItem("lang", lang);
      console.log(`[i18n] 已套用語言：${lang}`);
    })
    .catch((err) => {
      console.warn("[i18n] 無法載入語言檔，使用預設語言。", err);
      if (lang !== defaultLang) window.applyTranslations(defaultLang);
    });
};

// 將 JSON 字典套用到所有含 data-i18n 的元素
function applyI18n(dict) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = resolveKey(dict, key);
    if (!value) return;

    // 表單類元素
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT") {
      if (el.placeholder !== undefined && el.hasAttribute("placeholder")) {
        el.placeholder = value;
      } else {
        el.value = value;
      }
    }
    // 其他 HTML 元素（允許安全標籤）
    else {
      // 若文字中有 HTML 標籤，使用 innerHTML
      if (value.includes("<") && value.includes(">")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });
}

// 支援巢狀 key (e.g. hero.title)
function resolveKey(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : null), obj);
}

// 初始化：DOM 就緒後載入語言
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  const browserLang = (navigator.language || "en").toLowerCase();
  const guess =
    saved ||
    (browserLang.startsWith("zh-tw")
      ? "zh-TW"
      : browserLang.startsWith("zh")
      ? "zh-CN"
      : browserLang.startsWith("ms")
      ? "ms"
      : "en");

  window.applyTranslations(guess);
});

