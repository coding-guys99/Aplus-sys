/* === Desktop dropdown for .has-dropdown === */
(function(){
  const $$ = (s, r=document) => r.querySelectorAll(s);

  $$('.has-dropdown').forEach(box=>{
    const btn = box.querySelector('.nav-drop-btn');
    const dd  = box.querySelector('.dropdown');
    if (!btn || !dd) return;

    const open  = ()=>{ dd.classList.add('open'); btn.setAttribute('aria-expanded','true'); };
    const close = ()=>{ dd.classList.remove('open'); btn.setAttribute('aria-expanded','false'); };

    // 滑鼠：hover 開、離開關
    box.addEventListener('mouseenter', open);
    box.addEventListener('mouseleave', close);

    // 鍵盤/點擊：切換
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', dd.classList.contains('open'));
    });

    // 點外面關閉
    document.addEventListener('click', (e)=>{
      if (!box.contains(e.target)) close();
    });

    // ESC 關閉
    btn.addEventListener('keydown', (e)=>{ if (e.key==='Escape') close(); });
  });
})();

/* === Resize guard：手機 → 桌機時，自動關閉面板並解鎖 === */
(function(){
  const mql = window.matchMedia('(max-width:1024px)');
  function closeIfDesktop(){
    if (!mql.matches){
      const panel = document.getElementById('mobile-menu');
      const overlay = document.querySelector('.nav-overlay');
      // 關面板
      if (panel){ panel.classList.remove('is-open'); panel.setAttribute('aria-hidden','true'); }
      // 關遮罩
      if (overlay){ overlay.classList.remove('is-active'); }
      // 解鎖捲動（對齊你原本 lockScroll 的做法）
      document.body.style.position='';
      document.body.style.top='';
      document.body.style.left='';
      document.body.style.right='';
      document.body.style.width='';
    }
  }
  // 初始 & 監聽
  closeIfDesktop();
  window.addEventListener('resize', closeIfDesktop);
})();