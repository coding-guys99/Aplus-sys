/* menu.js — Desktop vs Mobile */
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

  const qs = (s) => document.querySelector(s);
  const openMobile = () => { qs('#mobile-menu')?.classList.add('is-open'); qs('.nav-overlay')?.classList.add('is-active'); lockScroll(true); };
  const closeMobile = () => { qs('#mobile-menu')?.classList.remove('is-open'); qs('.nav-overlay')?.classList.remove('is-active'); lockScroll(false); };

  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.nav-toggle');
    const closeBtn  = e.target.closest('.menu-close');
    const overlay   = e.target.classList.contains('nav-overlay');
    const isMobile  = window.matchMedia('(max-width:1024px)').matches;

    if (toggleBtn) { e.preventDefault(); isMobile ? openMobile() : null; return; }
    if (closeBtn || overlay) { closeMobile(); return; }
    if (e.target.closest('.menu-card')) closeMobile();
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobile(); });

  document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();