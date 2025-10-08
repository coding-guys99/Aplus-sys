/* menu.js — Desktop (inline nav) + Mobile (full-screen grid)
   - toggles overlay
   - locks body scroll
   - fixes aria-hidden for accessibility
   - closes on link click / overlay / ESC
   - keeps menu open when opening language list
*/
(function () {
  const $  = (s, r = document) => r.querySelector(s);

  // 動態抓元素（header 可能是 include 後才注入）
  const getMobileMenu = () => $('#mobile-menu');
  const getToggleBtn  = () => $('.nav-toggle');
  const getOverlay    = () => {
    let ov = $('.nav-overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.className = 'nav-overlay';
      document.body.appendChild(ov);
    }
    return ov;
  };

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

  // 事件委派
  document.addEventListener('click', (e)=>{
    const isMobile = window.matchMedia('(max-width:1024px)').matches;

    // 開關按鈕（☰）
    if (e.target.closest('.nav-toggle')){
      e.preventDefault();
      if (!isMobile) return; // 桌機不使用全螢幕面板
      const menu = getMobileMenu();
      menu?.classList.contains('is-open') ? closeMobile() : openMobile();
      return;
    }

    // 關閉按鈕 / overlay
    if (e.target.closest('.menu-close') || e.target.classList.contains('nav-overlay')){
      closeMobile(); 
      return;
    }

    const menu = getMobileMenu();
if (menu && menu.contains(e.target)) {
  // ✅ 語言卡片：只切換語言清單，不關面板
  if (e.target.closest('[data-open-lang], .menu-card--lang')) {
    e.preventDefault();
    e.stopPropagation();
    const list = document.getElementById('mobile-lang');
    if (list) {
      const open = list.classList.toggle('show'); // 配合 CSS 顯示
      list.hidden = !open;                        // 兼容 hidden 屬性
    }
    return;
  }

  // ✅ 點語言清單本身：不關面板（阻止冒泡）
  if (e.target.closest('#mobile-lang')) {
    e.stopPropagation();
    return;
  }

  // 其它正常連結/卡片 → 關閉面板
  const isLink = e.target.closest('a, .menu-card');
  if (isLink) closeMobile();
}
  });

  // ESC 關閉
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeMobile(); });

  // 動態 include 完成後，確保 overlay 存在
  document.addEventListener('partials:loaded', ()=>{ getOverlay(); });

  // footer 年份
  document.addEventListener('DOMContentLoaded', ()=>{
    getOverlay();
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();

// === 手機語言按鈕控制 ===
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('#lang-fab');
  const langPanel = document.querySelector('#mobile-lang');
  if (!langBtn || !langPanel) return;

  langBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = langPanel.classList.toggle('show');
    langBtn.setAttribute('aria-expanded', isOpen);
  });
});