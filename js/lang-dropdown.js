// lang-dropdown.js — 自動等待 header；找不到掛載點就建立；支援動態 include
(function () {
  const LANGS = [
    { code: 'en',    label: 'English' },
    { code: 'ms',    label: 'Bahasa Melayu' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
  ];

  function ensureHost() {
    // 1) 直接找既有掛載點
    let host = document.getElementById('lang-dropdown');
    if (host) return host;
    // 2) 沒有就嘗試在 .actions 建立
    const actions = document.querySelector('.actions');
    if (actions) {
      host = document.createElement('div');
      host.id = 'lang-dropdown';
      host.className = 'lang-dropdown';
      host.setAttribute('data-icon', './assets/icon/lang.png');
      actions.appendChild(host);
      return host;
    }
    // 3) 還沒有（header 可能尚未注入）
    return null;
  }

  function build(host) {
    // 按鈕
    let btn = host.querySelector('.lang-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.setAttribute('aria-label', 'Change language');
      const img = document.createElement('img');
      img.className = 'lang-icon';
      img.alt = 'Language';
      img.src = host.getAttribute('data-icon') || './assets/icon/lang.png';
      btn.appendChild(img);
      host.appendChild(btn);
    }

    // 選單
    let menu = host.querySelector('.lang-menu');
    if (!menu) {
      menu = document.createElement('ul');
      menu.className = 'lang-menu';
      const current = localStorage.getItem('lang') || 'en';
      LANGS.forEach(l=>{
        const li = document.createElement('li');
        li.textContent = l.label;
        li.dataset.setlang = l.code;
        if (l.code === current) li.classList.add('active');
        li.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          localStorage.setItem('lang', l.code);
          if (typeof window.applyTranslations === 'function') {
            try { window.applyTranslations(l.code); } catch { location.reload(); }
          } else {
            location.reload();
          }
          menu.classList.remove('show');
          const ov = document.querySelector('.nav-overlay');
          if (ov) ov.style.pointerEvents = '';
        });
        menu.appendChild(li);
      });
      host.appendChild(menu);
    }

    // 開關
    const overlay = document.querySelector('.nav-overlay');
    const toggle = (e) => {
      e.stopPropagation();
      const show = !menu.classList.contains('show');
      menu.classList.toggle('show', show);
      if (overlay) overlay.style.pointerEvents = show ? 'none' : '';
    };
    btn.addEventListener('click', toggle);
    document.addEventListener('click', (e) => {
      if (!host.contains(e.target)) {
        menu.classList.remove('show');
        if (overlay) overlay.style.pointerEvents = '';
      }
    });

    // 手機：搬到主選單
    const navList = document.querySelector('.nav-list');
    const actions = document.querySelector('.actions');
    const move = () => {
      const isMobile = window.matchMedia('(max-width:1024px)').matches;
      menu.classList.remove('show');
      if (isMobile) {
        if (!host.closest('.nav-list') && navList) {
          const li = document.createElement('li');
          li.className = 'nav-lang-item';
          li.appendChild(host);
          navList.appendChild(li);
          host.classList.add('lang-inmenu');
        }
      } else {
        if (actions && host.closest('.nav-list')) {
          actions.appendChild(host);
          host.classList.remove('lang-inmenu');
        }
      }
    };
    move();
    window.addEventListener('resize', move);
  }

  function boot() {
    const tryInit = () => {
      const header = document.querySelector('.site-header');
      const mainNav = document.getElementById('main-nav');
      const navList = document.querySelector('.nav-list');
      if (!header || !mainNav || !navList) return false;

      const host = ensureHost();
      if (!host) return false;

      build(host);
      return true;
    };

    // 先試一次
    if (tryInit()) return;

    // 監聽你可能的 include 事件
    document.addEventListener('partials:loaded', tryInit, { once: true });

    // 用 MutationObserver 等 header 插入
    const mo = new MutationObserver(() => { if (tryInit()) mo.disconnect(); });
    mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

    // 最後保險：間隔重試
    let tries = 0;
    const t = setInterval(() => { if (tryInit() || ++tries > 20) clearInterval(t); }, 150);
  }

  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
