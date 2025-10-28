/* ==========================================
   products.js — Products listing + filtering (i18n-ready)
   ========================================== */

(function(){
  const grid     = document.getElementById('productGrid');
  const emptyEl  = document.getElementById('emptyState');
  const tabsWrap = document.querySelector('.brand-tabs');
  const selectEl = document.getElementById('brandFilter');

  if(!grid || !tabsWrap || !selectEl){
    console.warn('[products] Missing required DOM nodes.');
    return;
  }

  // ===== Helpers =====
  function t(key, fb=''){ return (window.t ? window.t(key, fb) : (fb || key)); }
  function waitForProductData(timeoutMs = 5000){
    return new Promise((resolve, reject)=>{
      const start = Date.now();
      (function check(){
        if (window.PRODUCT_DATA && Object.keys(window.PRODUCT_DATA).length){
          return resolve(window.PRODUCT_DATA);
        }
        if (Date.now() - start > timeoutMs){
          console.warn('[products] PRODUCT_DATA timeout — continue with empty.');
          return resolve({});
        }
        requestAnimationFrame(check);
      })();
    });
  }
  // 等到 i18n 第一次就緒（你的 lang.js 在 init 時會 dispatch "i18n:changed"）
  function waitForI18n(timeoutMs = 5000){
    if (window.i18nDict) return Promise.resolve();
    return new Promise((resolve)=>{
      let done = false;
      const onChanged = ()=>{ if(!done){ done = true; cleanup(); resolve(); } };
      const tid = setTimeout(()=>{ if(!done){ done = true; cleanup(); resolve(); } }, timeoutMs);
      document.addEventListener('i18n:changed', onChanged, { once:true });
      function cleanup(){ clearTimeout(tid); document.removeEventListener('i18n:changed', onChanged); }
    });
  }

  // 以 brandKey 取可翻譯品牌名
  function brandNameOf(p){
    const key = p.brandKey || '';
    // 優先 i18n: brands.<key>.name，否則用 p.brand，再不然 key
    return t(`brands.${key}.name`, p.brand || key || '');
  }

  // 狀態
  let LAST_DATA = null;
  let LAST_BRAND = null;

  function render(DATA){
    LAST_DATA = DATA;
    const PRODUCTS = Object.values(DATA || {});
    console.log(`[products] Loaded ${PRODUCTS.length} products.`);

    // 聚合品牌（用翻譯名排序）
    const brandMap = new Map();
    PRODUCTS.forEach(p=>{
      if(!p || !p.brandKey) return;
      if(!brandMap.has(p.brandKey)){
        brandMap.set(p.brandKey, { key:p.brandKey, name: brandNameOf(p) });
      }
    });
    const allLabel = t('ui.all', 'All');
    const brands = [{key:'all', name: allLabel}]
      .concat(Array.from(brandMap.values())
      .sort((a,b)=> a.name.localeCompare(b.name)));

    buildChips(brands);
    buildSelect(brands);

    function filterProducts(brandKey){
      if(!brandKey || brandKey === 'all') return PRODUCTS;
      return PRODUCTS.filter(p=>p.brandKey === brandKey);
    }

    function renderCards(list){
      grid.innerHTML = '';
      if(!list.length){
        if (emptyEl){
          emptyEl.querySelector('p') && (emptyEl.querySelector('p').textContent =
            t('products.list.empty', 'No products under this brand yet.')
          );
          emptyEl.classList.remove('hidden');
        }
        return;
      }
      emptyEl && emptyEl.classList.add('hidden');

      const frag = document.createDocumentFragment();
      list.forEach(p=>{
        const card = document.createElement('article');
        card.className = 'product-card';

        const a = document.createElement('a');
        a.className = 'product-link';
        a.href = `product.html?id=${encodeURIComponent(p.id)}`;
        a.setAttribute('aria-label', `${p.name || ''} — ${t('products.card.view_details','view details')}`);

        const thumb = document.createElement('div');
        thumb.className = 'product-thumb';
        const img = document.createElement('img');
        img.src = p.hero || '';
        img.alt = `${brandNameOf(p)} ${p.name || ''}`;
        img.loading = 'lazy';
        thumb.appendChild(img);

        const body = document.createElement('div');
        body.className = 'product-body';

        const brand = document.createElement('div');
        brand.className = 'product-brand';
        brand.textContent = brandNameOf(p);

        const name = document.createElement('div');
        name.className = 'product-name';
        name.textContent = p.name || '';

        const desc = document.createElement('div');
        desc.className = 'product-desc';
        // 列表頁優先 tagline（通常較短），fallback desc
        desc.textContent = p.tagline || p.desc || '';

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
      LAST_BRAND = brandKey;

      // Desktop chips
      tabsWrap.querySelectorAll('.brand-chip').forEach(ch=>{
        const isActive = ch.getAttribute('data-brand') === brandKey;
        ch.classList.toggle('is-active', isActive);
        ch.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      // Mobile select
      if(selectEl.value !== brandKey) selectEl.value = brandKey;

      renderCards(filterProducts(brandKey));

      // Hash
      if(pushHash){
        if(brandKey === 'all') history.replaceState(null,'', 'products.html');
        else history.replaceState(null,'', `products.html#${brandKey}`);
      }

      // Title
      if(brandKey !== 'all'){
        const b = brands.find(x=>x.key===brandKey);
        document.title = `${(b && b.name) || brandKey} ${t('products.page.title_suffix','Products')} — Aplus Systems`;
      }else{
        document.title = `${t('products.page.title','Products')} — Aplus Systems`;
      }
    }

    function getInitialBrand(){
      const h = (location.hash || '').slice(1).trim();
      return h && brandMap.has(h) ? h : 'all';
    }

    function buildChips(blist){
      // 清除 All 之外的
      tabsWrap.querySelectorAll('.brand-chip:not([data-brand="all"])').forEach(n=>n.remove());
      // 確保 All chip 存在並更新文字
      let allChip = tabsWrap.querySelector('.brand-chip[data-brand="all"]');
      if(!allChip){
        allChip = document.createElement('button');
        allChip.className = 'brand-chip is-active';
        allChip.setAttribute('data-brand','all');
        allChip.setAttribute('aria-pressed','true');
        tabsWrap.appendChild(allChip);
      }
      allChip.textContent = t('ui.all','All');
      allChip.onclick = ()=> setFilter('all');

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
      // 更新 All option 文案
      const allOpt = selectEl.querySelector('option[value="all"]');
      if (allOpt) allOpt.textContent = t('products.ui.all_brands','All brands');

      blist.slice(1).forEach(b=>{
        const opt = document.createElement('option');
        opt.value = b.key;
        opt.textContent = b.name;
        selectEl.appendChild(opt);
      });
      selectEl.onchange = ()=> setFilter(selectEl.value);
    }

    // 初次渲染（維持原本 hash 規則）
    setFilter(getInitialBrand(), /*pushHash*/false);

    // hash 切換
    window.addEventListener('hashchange', ()=> setFilter(getInitialBrand(), false));
  }

  // =========== Boot ===========
  function rerenderIfReady(){
    if (LAST_DATA){
      // 重新產生品牌名（因品牌譯名可能改變），直接整個 render
      render(LAST_DATA);
      // 若之前已選過品牌，保留視圖
      if (LAST_BRAND){
        const keepHash = false;
        const evt = new Event('hashchange');
        // 直接以 LAST_BRAND 重設（避免 race）
        const tabsActive = document.querySelector(`.brand-chip[data-brand="${LAST_BRAND}"]`);
        if (tabsActive){
          tabsActive.click();
        }else{
          window.dispatchEvent(evt);
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', async ()=>{
    // 等 i18n 第一次就緒 + 產品資料就緒
    await Promise.all([ waitForI18n(), waitForProductData().then(data=> (LAST_DATA=data)) ]);
    render(LAST_DATA);

    // 之後語言切換就重渲染
    document.addEventListener('i18n:changed', rerenderIfReady);
  });
})();