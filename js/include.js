// /js/include.js
document.addEventListener("DOMContentLoaded", () => {
  const inject = (id, url) =>
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const slot = document.getElementById(id);
        if (slot) slot.innerHTML = html;
      });

  Promise.all([
    inject("include-header", "./partials/header.html"),
    inject("include-footer", "./partials/footer.html")
  ])
  .then(() => {
    // 通知其他腳本「partials 載入完成」
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  })
  .catch(err => console.error("Failed to load partials:", err));
});


document.addEventListener('DOMContentLoaded', () => {
  // 桌機 dropdown
  document.querySelectorAll('.has-dropdown .nav-drop-btn').forEach(btn => {
    const menu = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      // 關掉其他
      document.querySelectorAll('.has-dropdown .nav-drop-btn[aria-expanded="true"]').forEach(b=>{
        if(b!==btn){ b.setAttribute('aria-expanded','false'); b.nextElementSibling?.classList.remove('open'); }
      });
      btn.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open', !open);
    });
    // 失焦關閉（可選）
    btn.addEventListener('blur', () => setTimeout(()=>{
      btn.setAttribute('aria-expanded','false'); menu.classList.remove('open');
    },150));
  });

  // 點頁面其他處關閉
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.has-dropdown')){
      document.querySelectorAll('.has-dropdown .nav-drop-btn').forEach(b=>{
        b.setAttribute('aria-expanded','false'); b.nextElementSibling?.classList.remove('open');
      });
    }
  });
});