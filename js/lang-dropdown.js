/* lang-dropdown.js — desktop globe dropdown + mobile in-panel list
   - waits for header include (partials:loaded) and retries mounting
   - persists language to localStorage('lang'), then reloads
*/
(function(){
  const LANGS = [
    { code: 'en',    label: 'English' },
    { code: 'ms',    label: 'Bahasa Melayu' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
  ];

  function detectLang(){
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    const bl = (navigator.language || 'en').toLowerCase();
    if (bl.startsWith('zh-tw')) return 'zh-TW';
    if (bl.startsWith('zh'))    return 'zh-CN';
    if (bl.startsWith('ms'))    return 'ms';
    return 'en';
  }

  function buildList(current, onPick){
    const ul = document.createElement('ul');
    LANGS.forEach(l=>{
      const li = document.createElement('li');
      li.textContent = l.label;
      li.dataset.setlang = l.code;
      if (l.code === current) li.classList.add('active');
      li.addEventListener('click', ()=>{
        localStorage.setItem('lang', l.code);
        onPick(l.code);
      });
      ul.appendChild(li);
    });
    return ul;
  }

  function mountOnce(){
    const current = detectLang();

    // ===== 桌機：地球按鈕 + 下拉容器 =====
    const host   = document.getElementById('lang-dropdown'); // 放下拉的容器
    const btn    = document.getElementById('lang-btn');      // 地球 icon 按鈕
    if (host && btn && !host.dataset.mounted){
      host.classList.add('lang-dropdown');
      const menu = document.createElement('ul');
      menu.className = 'lang-menu';
      menu.appendChild(buildList(current, () => location.reload()));
      host.appendChild(menu);
      host.dataset.mounted = '1';

      // 點地球 -> 顯示/隱藏
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const show = !menu.classList.contains('show');
        menu.classList.toggle('show', show);
        btn.setAttribute('aria-expanded', show ? 'true' : 'false');
      });
      // 點外面 -> 關閉
      document.addEventListener('click', (e)=>{
        if (!host.contains(e.target) && !btn.contains(e.target)){
          menu.classList.remove('show');
          btn.setAttribute('aria-expanded','false');
        }
      });
    }

    // ===== 手機：面板內清單（在 mobile menu 底部） =====
    const mobileList = document.getElementById('mobile-lang');         // <ul id="mobile-lang" class="lang-menu in-panel" hidden>
    const mobileBtn  = document.querySelector('[data-open-lang]');     // 「Language」卡片
    if (mobileList && mobileBtn && !mobileList.dataset.mounted){
      mobileList.innerHTML = '';
      mobileList.appendChild(buildList(current, (code) => {
        // 使用者選了語言 → 關面板 + reload
        const mm = document.getElementById('mobile-menu');
        const ov = document.querySelector('.nav-overlay');
        mm?.classList.remove('is-open');
        mm?.setAttribute('aria-hidden', 'true');
        ov?.classList.remove('is-active');
        localStorage.setItem('lang', code);
        location.reload();
      }));
      mobileList.dataset.mounted = '1';

      // 切換語言清單顯示（僅展開，不關主選單；真正關閉交給 menu.js）
      mobileBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        mobileList.hidden = !mobileList.hidden;
      });
    }

    return !!((host && btn) || (mobileList && mobileBtn));
  }

  // 初始化：等 DOM、等 partials，再重試幾次（應付延遲載入）
  function bootWithRetry(){
    let tries = 0, maxTries = 10;
    const timer = setInterval(()=>{
      if (mountOnce() || ++tries >= maxTries){
        clearInterval(timer);
      }
    }, 150);
  }

  document.addEventListener('DOMContentLoaded', bootWithRetry);
  document.addEventListener('partials:loaded', bootWithRetry);
})();

// === mobile-lang.js — 手機語言抽屜 ===
(function () {
  function init() {
    const btn    = document.getElementById('lang-fab');     // <button class="menu-card--lang">
    const panel  = document.getElementById('mobile-lang');  // <ul id="mobile-lang" class="lang-menu in-panel">
    const mobile = document.getElementById('mobile-menu');

    if (!btn || !panel || !mobile) return;

    // 切換清單
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();                  // 不要讓 menu.js 把整個面板關掉
      const open = panel.classList.toggle('show');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // 點清單內部別關整個面板
    panel.addEventListener('click', (e) => e.stopPropagation());

    // 在 mobile 面板裡點其他地方，自動把語言清單收起
    mobile.addEventListener('click', (e) => {
      if (!e.target.closest('.mobile-lang-trigger')) {
        panel.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('partials:loaded', init); // header 透過 include 載入時
  document.addEventListener('DOMContentLoaded', init);
})();