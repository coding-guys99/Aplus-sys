// /js/include.js
document.addEventListener('DOMContentLoaded', () => {
  const inject = (id, url) =>
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
        return res.text();
      })
      .then(html => {
        const slot = document.getElementById(id);
        if (slot) slot.innerHTML = html;
      });

  Promise.all([
    inject('include-header', './partials/header.html'),
    inject('include-footer', './partials/footer.html')
  ])
  .then(() => {
    // 通知其他腳本「partials 載入完成」
    document.dispatchEvent(new CustomEvent('partials:loaded'));
    // 再初始化桌機下拉
    initDesktopDropdowns();
  })
  .catch(err => console.error('[include] Failed to load partials:', err));
});

/** 桌機下拉選單初始化（等 header 注入後再跑） */
function initDesktopDropdowns(){
  const header = document.querySelector('.site-header');
  if (!header) return;

  // 避免重複初始化
  if (header.dataset.dropdownInit === '1') return;
  header.dataset.dropdownInit = '1';

  const btns = header.querySelectorAll('.has-dropdown .nav-drop-btn');
  const closeAll = () => {
    btns.forEach(b => {
      b.setAttribute('aria-expanded','false');
      b.nextElementSibling && b.nextElementSibling.classList.remove('open');
    });
  };

  btns.forEach(btn => {
    const menu = btn.nextElementSibling;
    if (!menu) return;

    // 點擊切換
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAll();
      btn.setAttribute('aria-expanded', String(!isOpen));
      menu.classList.toggle('open', !isOpen);
    });

    // 滑入/離開（桌機體驗更順）
    const box = btn.closest('.has-dropdown');
    if (box){
      box.addEventListener('mouseenter', () => {
        closeAll();
        btn.setAttribute('aria-expanded','true');
        menu.classList.add('open');
      });
      box.addEventListener('mouseleave', () => {
        btn.setAttribute('aria-expanded','false');
        menu.classList.remove('open');
      });
    }

    // 鍵盤 ESC 關閉
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Escape'){
        btn.setAttribute('aria-expanded','false');
        menu.classList.remove('open');
        btn.blur();
      }
    });
  });

  // 點頁面其他處關閉
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) closeAll();
  });

  // 視窗縮放：從手機變桌機時，確保關閉任何殘留狀態
  const mql = window.matchMedia('(max-width:1024px)');
  const onResize = () => { if (!mql.matches) closeAll(); };
  onResize();
  window.addEventListener('resize', onResize);
}