
/* menu.js — Desktop (inline nav) + Mobile (full-screen grid) */
(function () {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // 動態抓元素（避免一開始是 null）
  const getMobileMenu = () => $('#mobile-menu');
  const getToggleBtn  = () => $('.nav-toggle');
  const getOverlay    = () => $('.nav-overlay') || (()=>{
    const ov = document.createElement('div');
    ov.className = 'nav-overlay';
    document.body.appendChild(ov);
    return ov;
  })();

  let scrollLocked = false;
  function lockScroll(lock){
    if (lock && !scrollLocked){
      document.body.dataset.scrollY = String(window.scrollY);
      Object.assign(document.body.style, {
        position:'fixed', top:`-${window.scrollY}px`, left:'0', right:'0', width:'100%'
      });
      scrollLocked = true;
    } else if (!lock && scrollLocked){
      const y = parseInt(document.body.dataset.scrollY || '0', 10);
      Object.assign(document.body.style, {position:'', top:'', left:'', right:'', width:''});
      window.scrollTo(0, y);
      scrollLocked = false;
    }
  }

  function openMobile(){
    const menu = getMobileMenu(); if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden','false');
    getOverlay().classList.add('is-active');
    getToggleBtn()?.setAttribute('aria-expanded','true');
    lockScroll(true);
  }
  function closeMobile(){
    const menu = getMobileMenu(); if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden','true');
    getOverlay().classList.remove('is-active');
    getToggleBtn()?.setAttribute('aria-expanded','false');
    lockScroll(false);
  }

  // 事件委派（不用在載入時就抓到元素）
  document.addEventListener('click', (e)=>{
    const isMobile = window.matchMedia('(max-width:1024px)').matches;

    if (e.target.closest('.nav-toggle')){
      e.preventDefault();
      if (!isMobile) return; // 桌機不開全螢幕
      const menu = getMobileMenu();
      menu?.classList.contains('is-open') ? closeMobile() : openMobile();
      return;
    }

    if (e.target.closest('.menu-close') || e.target.classList.contains('nav-overlay')){
      closeMobile(); return;
    }

    const menu = getMobileMenu();
    if (menu && menu.contains(e.target)){
      const link = e.target.closest('a, .menu-card');
      if (link) closeMobile();
    }
  });

  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeMobile(); });

  // 動態 include 完成後，確保 overlay 存在
  document.addEventListener('partials:loaded', ()=>{ getOverlay(); });

  // footer 年份
  document.addEventListener('DOMContentLoaded', ()=>{
    getOverlay();
    const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  });
})();
