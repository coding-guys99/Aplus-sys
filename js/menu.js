/* menu.js — Desktop keeps classic nav; Mobile shows 2×3 card grid */
(function () {
  let isLocked = false;

  function lockScroll(lock) {
    if (lock && !isLocked) {
      document.body.dataset.scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
      isLocked = true;
    } else if (!lock && isLocked) {
      const y = parseInt(document.body.dataset.scrollY || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, y);
      isLocked = false;
    }
  }

  function qs(sel){ return document.querySelector(sel); }

  function openMobile() {
    const panel = qs('#mobile-menu');
    const ov = qs('.nav-overlay');
    if (!panel || !ov) return;
    panel.classList.add('is-open');
    ov.classList.add('is-active');
    panel.setAttribute('aria-hidden','false');
    lockScroll(true);
  }
  function closeMobile() {
    const panel = qs('#mobile-menu');
    const ov = qs('.nav-overlay');
    panel?.classList.remove('is-open');
    ov?.classList.remove('is-active');
    panel?.setAttribute('aria-hidden','true');
    lockScroll(false);
  }

  // 若要維持桌機版的主選單切換（可選）
  function toggleDesktop() {
    const nav = qs('.main-nav');
    if (!nav) return;
    nav.classList.toggle('is-open');
  }

  // 點擊事件
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.nav-toggle');
    const closeBtn  = e.target.closest('.menu-close');
    const isCard    = e.target.closest('.menu-card');
    const openLang  = e.target.closest('[data-open-lang]');
    const isMobile  = window.matchMedia('(max-width:1024px)').matches;

    if (toggleBtn) {
      e.preventDefault();
      isMobile ? openMobile() : toggleDesktop();
      return;
    }
    if (closeBtn) { closeMobile(); return; }

    // 點 overlay 關閉
    if (e.target.classList.contains('nav-overlay')) { closeMobile(); return; }

    // 點卡片導頁（a 會自動跳轉）；若是語言卡片，打開你現有的地球下拉
    if (isCard && isMobile) {
      if (openLang) {
        // 觸發地球按鈕（若存在）
        const langBtn = document.getElementById('lang-btn') || document.querySelector('.lang-btn');
        langBtn?.click();
        return;
      }
      // 其他超連結：在導航前先收面板
      closeMobile();
      return;
    }
  });

  // Esc 鍵關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobile();
  });

  // 初始化：確保 overlay 存在
  document.addEventListener('DOMContentLoaded', () => {
    if (!qs('.nav-overlay')) {
      const ov = document.createElement('div');
      ov.className = 'nav-overlay';
      document.body.appendChild(ov);
    }
  });

  // Footer 年份
  document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();