/* lang-dropdown.js
   - Renders desktop dropdown (#lang-dropdown + #lang-btn)
   - Renders a separate list inside mobile panel (#mobile-lang)
   - Persists selection to localStorage('lang'), then reloads
*/

document.addEventListener('DOMContentLoaded', () => {
  const LANGUAGES = [
    { code: 'en',    label: 'English' },
    { code: 'ms',    label: 'Bahasa Melayu' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
  ];

  // 目前語言：localStorage 優先，其次用瀏覽器語言推斷
  let current = localStorage.getItem('lang');
  if (!current) {
    const bl = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (bl.startsWith('zh-tw')) current = 'zh-TW';
    else if (bl.startsWith('zh')) current = 'zh-CN';
    else if (bl.startsWith('ms')) current = 'ms';
    else current = 'en';
  }

  // 建立語言 <li> 清單
  function buildList(onPick) {
    const ul = document.createElement('ul');
    LANGUAGES.forEach(l => {
      const li = document.createElement('li');
      li.textContent = l.label;
      li.dataset.setlang = l.code;
      if (l.code === current) li.classList.add('active');
      li.addEventListener('click', () => onPick(l.code));
      ul.appendChild(li);
    });
    return ul;
  }

  // 通用切換邏輯
  function applyLang(code) {
    localStorage.setItem('lang', code);
    // 可在此呼叫你的即時套用邏輯；若沒有就 reload：
    location.reload();
  }

  /* ===== 桌機 dropdown：#lang-btn + #lang-dropdown ===== */
  const desktopHost = document.getElementById('lang-dropdown'); // 容器
  const desktopBtn  = document.getElementById('lang-btn');       // 地球按鈕

  if (desktopHost && desktopBtn) {
    desktopHost.classList.add('lang-dropdown');
    const menu = document.createElement('ul');
    menu.className = 'lang-menu';
    menu.appendChild(buildList(applyLang));
    desktopHost.appendChild(menu);

    // 切換開合
    desktopBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
      desktopBtn.setAttribute('aria-expanded', menu.classList.contains('show') ? 'true' : 'false');
    });

    // 點外面收合
    document.addEventListener('click', (e) => {
      if (!desktopHost.contains(e.target) && !desktopBtn.contains(e.target)) {
        menu.classList.remove('show');
        desktopBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ===== 手機面板語言清單：#mobile-lang + [data-open-lang] ===== */
  const mobileList = document.getElementById('mobile-lang');     // <ul id="mobile-lang" class="lang-menu in-panel" hidden>
  const mobileBtn  = document.querySelector('[data-open-lang]'); // 「Language」卡片按鈕

  if (mobileList && mobileBtn) {
    mobileList.innerHTML = '';
    mobileList.appendChild(buildList((code) => {
      // 切換語言前先收起 mobile menu（視覺較乾淨）
      const mm = document.getElementById('mobile-menu');
      const ov = document.querySelector('.nav-overlay');
      mm?.classList.remove('is-open');
      mm?.setAttribute('aria-hidden', 'true');
      ov?.classList.remove('is-active');
      applyLang(code);
    }));

    // 展開 / 收起清單（不離開面板）
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileList.hidden = !mobileList.hidden;
    });
  }
});