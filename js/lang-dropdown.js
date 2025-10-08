// lang-dropdown.js — Desktop dropdown + Mobile bottom bar
(function () {
  const LANGS = [
    { code: "zh-TW", label: "繁體中文" },
    { code: "zh-CN", label: "简体中文" },
    { code: "en",    label: "English" },
    { code: "ms",    label: "Bahasa Melayu" },
  ];

  function getCurrent() {
    const stored = localStorage.getItem("lang");
    if (stored) return stored;
    const nav = navigator.language || "en";
    if (nav.startsWith("zh-TW")) return "zh-TW";
    if (nav.startsWith("zh"))    return "zh-CN";
    if (nav.startsWith("ms"))    return "ms";
    return "en";
  }

  function apply(code) {
    localStorage.setItem("lang", code);
    // 若你有現成的 i18n 切換
    if (typeof window.applyLanguage === "function") {
      window.applyLanguage(code);
    } else {
      location.reload();
    }
  }

  /* ---------- Desktop dropdown ---------- */
  function mountDesktop() {
    const host = document.getElementById("lang-dropdown");
    const btn  = document.getElementById("lang-btn");
    if (!host || !btn) return;

    const ul = document.createElement("ul");
    ul.className = "lang-menu";
    ul.id = "lang-menu";

    const current = getCurrent();
    LANGS.forEach(l => {
      const li = document.createElement("li");
      li.textContent = l.label;
      if (l.code === current) li.classList.add("active");
      li.addEventListener("click", (e) => {
        e.stopPropagation();
        apply(l.code);
      });
      ul.appendChild(li);
    });

    host.appendChild(ul);

    // toggle
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      ul.classList.toggle("show");
      btn.setAttribute("aria-expanded", ul.classList.contains("show") ? "true" : "false");
    });

    // click outside
    document.addEventListener("click", (e) => {
      if (!host.contains(e.target) && ul.classList.contains("show")) {
        ul.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Mobile bottom bar ---------- */
  function mountMobileBar() {
    const container = document.querySelector("#mobile-menu .lang-bar");
    if (!container) return;

    container.innerHTML = ""; // reset
    const current = getCurrent();

    LANGS.forEach((l, idx) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "lang-chip";
      chip.textContent = l.label.replace("中文","中").replace("English","EN").replace("Bahasa Melayu","MS");
      chip.setAttribute("aria-current", l.code === current ? "true" : "false");
      chip.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // 不要把點擊泡到面板 → 造成關閉
        apply(l.code);
      });
      container.appendChild(chip);

      if (idx < LANGS.length - 1) {
        const sep = document.createElement("span");
        sep.className = "lang-sep";
        container.appendChild(sep);
      }
    });
  }

  function boot() {
    mountDesktop();
    mountMobileBar();
  }

  document.addEventListener("DOMContentLoaded", boot);
  document.addEventListener("partials:loaded", boot); // 若 header 是動態載入
})();