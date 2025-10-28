/* ==========================================
   products.js — Products listing + filtering (i18n-ready)
   ========================================== */

// 🔒 Lang lock + bootstrap (VERY TOP)
// === Wait for lang.js ready before rendering ===
document.addEventListener('i18n:ready', ()=>{ console.log('i18n ready'); });
(function(){
  const LS_KEY = 'app.lang';

  // 1) 讀 URL ?lang
  const url = new URL(location.href);
  const urlLang = (url.searchParams.get('lang') || '').trim();

  // 2) 讀 localStorage
  let storeLang = null;
  try { storeLang = localStorage.getItem(LS_KEY) || ''; } catch(e){}

  // 3) fallback：<html lang> 或瀏覽器
  const docLang = (document.documentElement.getAttribute('lang') || '').trim();
  const navLang = (navigator.language || 'en').slice(0,2);

  // 4) 決定使用語言：URL > localStorage > <html> > navigator
  const lang = urlLang || storeLang || docLang || navLang || 'en';

  // 5) 若網址沒有 ?lang，補上（不重載）
  if (!urlLang) {
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }

  // 6) 同步到 localStorage 與 <html lang>
  try { localStorage.setItem(LS_KEY, lang); } catch(e){}
  document.documentElement.lang = lang;

  // 7) 同步到 window.i18n（若存在）
  if (window.i18n) {
    if ('locale' in window.i18n) window.i18n.locale = lang;
    if ('lang' in window.i18n) window.i18n.lang = lang;
  }

  // 8) 導出切換函式：切語言時也更新網址 ?lang
  window.setAppLang = function(next){
    if (!next) return;
    try { localStorage.setItem(LS_KEY, next); } catch(e){}
    document.documentElement.lang = next;
    if (window.i18n) {
      if ('locale' in window.i18n) window.i18n.locale = next;
      if ('lang' in window.i18n) window.i18n.lang = next;
    }
    // 同步網址參數（不重載）
    const u = new URL(location.href);
    u.searchParams.set('lang', next);
    history.replaceState(null, '', u);

    // 通知其他模組（你的 products.js 已經監聽 i18n:change）
    window.dispatchEvent(new Event('i18n:change'));
  };
})();


(function(){
  const grid     = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const tabsWrap = document.querySelector('.brand-tabs');
  const selectEl = document.getElementById('brandFilter');

  if(!grid || !tabsWrap || !selectEl){
    console.warn('[products] Missing required DOM nodes.');
    return;
  }

  // ---------- i18n helpers ----------
  // 取目前語言（用你現有的 i18n 套件狀態）
  function getLocale(){
    return (window.i18n && (window.i18n.locale || window.i18n.lang)) ||
           document.documentElement.lang ||
           'en';
  }

  // 翻譯函式：優先 common/products，再 fallback
  function t(key, fallback=''){
    const API = window.i18n && (window.i18n.t || window.i18n.translate);
    if (typeof API === 'function') {
      const v = API(key);
      if (v && typeof v === 'string') return v;
    }
    // 允許你自家 t()
    if (typeof window.t === 'function') {
      const v = window.t(key);
      if (v && typeof v === 'string') return v;
    }
    return fallback;
  }

  // 「全部」標籤的 key（依你前面 i18n 結構選一個有的）
  function tAll(){
    return t('products.all',
          t('common.all',
          t('ui.all','All')));
  }

  // 品牌顯示名稱：優先 brands.<brandKey>.name -> 用原 brand / brandKey
  function tBrand(brandKey, fallbackName){
    return t(`brands.${brandKey}.name`, fallbackName || brandKey || '');
  }

  // 產品顯示名稱/標語/描述：用 i18nKey（你已加在每個產品上）
  function tProductName(p){
    return p.i18nKey ? t(`${p.i18nKey}.name`, p.name || '') : (p.name || '');
  }
  function tProductTagline(p){
    // 列表頁顯示簡短字串，先用 tagline，沒有就 desc
    const byKey = p.i18nKey ? t(`${p.i18nKey}.tagline`, '') : '';
    if (byKey) return byKey;
    const byKeyDesc = p.i18nKey ? t(`${p.i18nKey}.desc`, '') : '';
    if (byKeyDesc) return byKeyDesc;
    return p.tagline || p.desc || '';
  }

  // ---------- 等待資料 ----------
  function waitForData(timeoutMs = 3000){
    return new Promise((resolve, reject)=>{
      const start = Date.now();
      (function check(){
        if (window.PRODUCT_DATA && Object.keys(window.PRODUCT_DATA).length){
          return resolve(window.PRODUCT_DATA);
        }
        if (Date.now() - start > timeoutMs){
          return reject(new Error('PRODUCT_DATA not available within timeout'));
        }
        requestAnimationFrame(check);
      })();
    });
  }

  let LAST_DATA = null;
  let LAST_BRANDS = null;

  function render(DATA){
    LAST_DATA = DATA;
    const PRODUCTS = Object.values(DATA || {});
    const locale = getLocale();
    console.log(`[products] Loaded ${PRODUCTS.length} products. locale=${locale}`);

    // 聚合品牌（顯示名稱用 i18n）
    const brandMap = new Map();
    PRODUCTS.forEach(p=>{
      if(!p || !p.brandKey) return;
      if(!brandMap.has(p.brandKey)){
        const displayName = tBrand(p.brandKey, p.brand || p.brandKey);
        brandMap.set(p.brandKey, { key: p.brandKey, name: displayName });
      }
    });

    // 品牌陣列（含 All），依當前語言排序
    const brands = [{key:'all', name: tAll()}].concat(
      Array.from(brandMap.values())
           .sort((a,b)=> a.name.localeCompare(b.name, locale, {sensitivity:'base'}))
    );
    LAST_BRANDS = brands;

    buildChips(brands);
    buildSelect(brands);

    function filterProducts(brandKey){
      if(!brandKey || brandKey === 'all') return PRODUCTS;
      return PRODUCTS.filter(p=>p.brandKey === brandKey);
    }

    function renderCards(list){
      grid.innerHTML = '';
      if(!list.length){
        if (emptyState) emptyState.classList.remove('hidden');
        return;
      }
      if (emptyState) emptyState.classList.add('hidden');

      const frag = document.createDocumentFragment();
      list.forEach(p=>{
        const card = document.createElement('article');
        card.className = 'product-card';

        const a = document.createElement('a');
        a.className = 'product-link';
        a.href = `product.html?id=${encodeURIComponent(p.id)}`;

        const displayName  = tProductName(p);
        const displayBrand = tBrand(p.brandKey, p.brand || p.brandKey);
        const displayDesc  = tProductTagline(p);

        a.setAttribute('aria-label', `${displayName} — ${t('products.view_details','view details')}`);

        const thumb = document.createElement('div');
        thumb.className = 'product-thumb';
        const img = document.createElement('img');
        img.src = p.hero || '';
        img.alt = `${displayBrand} ${displayName}`;
        img.loading = 'lazy';
        thumb.appendChild(img);

        const body = document.createElement('div');
        body.className = 'product-body';

        const brand = document.createElement('div');
        brand.className = 'product-brand';
        brand.textContent = displayBrand;

        const name = document.createElement('div');
        name.className = 'product-name';
        name.textContent = displayName;

        const desc = document.createElement('div');
        desc.className = 'product-desc';
        desc.textContent = displayDesc;

        body.appendChild(brand);
        body.appendChild(name);
        body.appendChild(desc);

        a.appendChild(thumb);
        a.appendChild(body);
        card.appendChild(a);
        frag.appendChild(card);
      });
      grid.appendChild(frag);
    }

    function setFilter(brandKey='all', pushHash=true){
      // 更新 chips
      tabsWrap.querySelectorAll('.brand-chip').forEach(ch=>{
        const isActive = ch.getAttribute('data-brand') === brandKey;
        ch.classList.toggle('is-active', isActive);
        ch.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      // 更新 select
      if(selectEl.value !== brandKey) selectEl.value = brandKey;

      renderCards(filterProducts(brandKey));

      // 更新 hash
      if(pushHash){
        if(brandKey === 'all') history.replaceState(null,'', 'products.html');
        else history.replaceState(null,'', `products.html#${brandKey}`);
      }

      // 更新標題（品牌名要 i18n）
      if(brandKey !== 'all'){
        const b = LAST_BRANDS.find(x=>x.key===brandKey);
        const brandName = (b && b.name) || brandKey;
        document.title = `${brandName} ${t('products.title_suffix','Products')} — Aplus Systems`;
      }else{
        document.title = `${t('products.page_title','Products')} — Aplus Systems`;
      }
    }

    function getInitialBrand(){
      const h = (location.hash || '').slice(1).trim();
      return h && brandMap.has(h) ? h : 'all';
    }

    function buildChips(blist){
      // 清掉 All 之外
      tabsWrap.querySelectorAll('.brand-chip:not([data-brand="all"])').forEach(n=>n.remove());
      // 確保 All 存在，並更新文案
      let allChip = tabsWrap.querySelector('.brand-chip[data-brand="all"]');
      if(!allChip){
        allChip = document.createElement('button');
        allChip.className = 'brand-chip is-active';
        allChip.setAttribute('data-brand','all');
        allChip.setAttribute('aria-pressed','true');
        tabsWrap.appendChild(allChip);
      }
      allChip.textContent = tAll();
      allChip.onclick = ()=>setFilter('all');

      blist.slice(1).forEach(b=>{
        const btn = document.createElement('button');
        btn.className = 'brand-chip';
        btn.textContent = b.name;
        btn.setAttribute('data-brand', b.key);
        btn.addEventListener('click', ()=>setFilter(b.key));
        tabsWrap.appendChild(btn);
      });
    }

    function buildSelect(blist){
      // 清空 All 之外
      [...selectEl.options].forEach((o,i)=>{ if(i>0) o.remove(); });
      // 更新第一個 option（All）的顯示
      if (selectEl.options[0]) selectEl.options[0].textContent = tAll();

      blist.slice(1).forEach(b=>{
        const opt = document.createElement('option');
        opt.value = b.key;
        opt.textContent = b.name;
        selectEl.appendChild(opt);
      });
      // 綁 change
      if (!selectEl._i18nBound) {
        selectEl.addEventListener('change', ()=> setFilter(selectEl.value));
        selectEl._i18nBound = true;
      }
    }

    // 首次渲染
    setFilter(getInitialBrand(), /*pushHash*/false);

    // 監聽 hash 切換
    if (!window._productsHashBound) {
      window.addEventListener('hashchange', ()=> setFilter(getInitialBrand(), false));
      window._productsHashBound = true;
    }
  }

  // 語言切換時重新渲染（你的 i18n 系統如果有不同事件名，把 'i18n:change' 換掉即可）
  function bindI18nRerender(){
    if (window._productsI18nBound) return;
    window.addEventListener('i18n:change', ()=>{
      if (LAST_DATA) render(LAST_DATA);
    });
    window._productsI18nBound = true;
  }

  // 啟動
  // 啟動（等 i18n 準備好再渲染，並設有保險超時）
document.addEventListener('DOMContentLoaded', ()=>{
  bindI18nRerender();

  const boot = ()=>{
    waitForData().then(render).catch(err=>{
      console.warn('[products] Failed to load PRODUCT_DATA:', err);
      render({});
    });
  };

  // 若 lang.js 已經標記就緒，直接開跑
  if (window._i18nReady) return boot();

  // 否則等事件，並加超時保險
  let started = false;
  const startOnce = ()=>{ if (started) return; started = true; boot(); };

  window.addEventListener('i18n:ready', startOnce, { once:true });
  setTimeout(startOnce, 500); // 超過 1.5s 還沒好就先渲染一次，避免空白
});
})();
