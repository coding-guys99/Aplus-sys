/* menu.js — Desktop (inline nav) + Mobile (full-screen grid)
   - toggles overlay
   - locks body scroll
   - fixes aria-hidden for accessibility
   - closes on link click / overlay / ESC
*/
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const header     = $('.site-header');
  const toggleBtn  = $('.nav-toggle');
  const overlay    = $('.nav-overlay') || (() => {
    const ov = document.createElement('div');
    ov.className = 'nav-overlay';
    document.body.appendChild(ov);
    return ov;
  })();
  const mobileMenu = $('#mobile-menu');

  let scrollLocked = false;

  function lockScroll(lock) {
    if (lock && !scrollLocked) {
      document.body.dataset.scrollY = String(window.scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      scrollLocked = true;
    } else if (!lock && scrollLocked) {
      const y = parseInt(document.body.dataset.scrollY || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, y);
      scrollLocked = false;
    }
  }

  function openMobile() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false'); // ✅ 可互動
    overlay.classList.add('is-active');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    lockScroll(true);
  }

  function closeMobile() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true'); // ✅ 關閉才隱藏
    overlay.classList.remove('is-active');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    lockScroll(false);
  }

  // 點擊事件（委派）
  document.addEventListener('click', (e) => {
    const isMobile = window.matchMedia('(max-width:1024px)').matches;

    // 開關按鈕
    if (e.target.closest('.nav-toggle')) {
      e.preventDefault();
      if (!isMobile) return;          // 桌機不使用全螢幕面板
      mobileMenu?.classList.contains('is-open') ? closeMobile() : openMobile();
      return;
    }

    // 關閉按鈕 / overlay
    if (e.target.closest('.menu-close') || e.target.classList.contains('nav-overlay')) {
      closeMobile();
      return;
    }

    // 點選手機面板中的導覽卡片或連結 → 自動關閉
    if (mobileMenu && mobileMenu.contains(e.target)) {
      const isLink = e.target.closest('a, .menu-card');
      if (isLink) closeMobile();
    }
  });

  // 鍵盤 ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobile();
  });

  // 初始化年份（footer）
  document.addEventListener('DOMContentLoaded', () => {
    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();