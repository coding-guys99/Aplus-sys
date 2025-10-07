/* menu-lite.js — mobile drawer with overlay + scroll lock + no conflict with lang */
(function () {
  function getEls() {
    const header  = document.querySelector(".site-header");
    const mainNav = document.getElementById("main-nav");
    const navList = mainNav ? mainNav.querySelector(".nav-list") : null;
    const toggle  = document.querySelector(".nav-toggle");
    const overlay = document.querySelector(".nav-overlay");
    return { header, mainNav, navList, toggle, overlay };
  }

  function init() {
    const { header, mainNav, navList, toggle, overlay } = getEls();
    if (!header || !mainNav || !navList || !toggle || !overlay) {
      console.warn("[menu] waiting…", {
        header: !!header, mainNav: !!mainNav, navList: !!navList,
        toggle: !!toggle, overlay: !!overlay
      });
      return false;
    }

    let locked = false, lastY = 0;
    const lock = (on) => {
      if (on && !locked) {
        lastY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${lastY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        locked = true;
      } else if (!on && locked) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        window.scrollTo(0, lastY);
        locked = false;
      }
    };

    const openMenu = () => {
      mainNav.classList.add("is-open");
      overlay.classList.add("is-active");
      toggle.setAttribute("aria-expanded","true");
      lock(true);
      console.log("[menu] open");
    };
    const closeMenu = () => {
      mainNav.classList.remove("is-open");
      overlay.classList.remove("is-active");
      toggle.setAttribute("aria-expanded","false");
      lock(false);
      console.log("[menu] close");
    };

    function onDocTap(e) {
      if (e.target.closest(".lang-dropdown")) return; // 不干擾語言下拉
      if (e.target.closest(".nav-toggle")) {
        e.preventDefault();
        mainNav.classList.contains("is-open") ? closeMenu() : openMenu();
        return;
      }
      if (e.target.closest(".nav-list a")) { closeMenu(); return; }
      if (!header.contains(e.target)) { closeMenu(); }
    }

    document.addEventListener("click", onDocTap);
    document.addEventListener("touchstart", onDocTap, { passive:false });
    overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeMenu(); });

    // 回桌機寬度時保險關閉
    const mq = window.matchMedia("(min-width:1025px)");
    mq.addEventListener("change", closeMenu);

    console.log("[menu] ready");
    return true;
  }

  function boot() {
    if (init()) return;
    // 1) 等 include.js 注入完
    document.addEventListener("partials:loaded", init, { once: true });
    // 2) 觀察 DOM 出現關鍵節點就啟動
    const mo = new MutationObserver(() => { if (init()) mo.disconnect(); });
    mo.observe(document.body, { childList: true, subtree: true });
    // 3) 保險重試
    let tries = 0;
    const t = setInterval(() => { if (init() || ++tries > 30) clearInterval(t); }, 150);
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();

// 點主選單連結：先關選單，再導頁（避免被其它 listener 阻擋）
document.addEventListener('click', (e) => {
  const link = e.target.closest('.main-nav a');
  if (!link) return;

  const href = link.getAttribute('href');
  // 若是錨點連結(#...)，讓瀏覽器自己處理（或你用平滑滾動）
  if (!href || href === '#') return;

  // 關選單 + 解鎖滾動
  try { closeMenu(); } catch (err) {}

  // 讓關閉動畫/解鎖先生效，再導頁（避免 iOS/Chrome 有時取消跳轉）
  setTimeout(() => {
    window.location.href = href;
  }, 0);
});

// iOS 某些機型對 touchstart 比較敏感，再補一份以防萬一
document.addEventListener('touchstart', (e) => {
  const link = e.target.closest('.main-nav a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href === '#') return;
  try { closeMenu(); } catch (err) {}
  setTimeout(() => { window.location.href = href; }, 0);
}, { passive: true });