/* ==========================================
   products.js — Products listing + filtering
   ========================================== */

(function(){
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const tabsWrap = document.querySelector('.brand-tabs');
  const selectEl = document.getElementById('brandFilter');

  const DATA = (window.PRODUCT_DATA || {});
  const PRODUCTS = Object.values(DATA); // 扁平陣列

  // 聚合品牌（依 brandKey）
  const brandMap = new Map();
  PRODUCTS.forEach(p=>{
    if(!p.brandKey) return;
    if(!brandMap.has(p.brandKey)){
      brandMap.set(p.brandKey, { key:p.brandKey, name:p.brand || p.brandKey });
    }
  });
  // 排序：英文字母
  const brands = [{key:'all', name:'All'}].concat(
    Array.from(brandMap.values()).sort((a,b)=>a.name.localeCompare(b.name))
  );

  // 生成品牌 chips（桌機）
  function buildChips(){
    // 先清空（保留第一顆「All」）
    tabsWrap.querySelectorAll('.brand-chip:not([data-brand="all"])').forEach(n=>n.remove());
    brands.slice(1).forEach(b=>{
      const btn = document.createElement('button');
      btn.className = 'brand-chip';
      btn.textContent = b.name;
      btn.setAttribute('data-brand', b.key);
      btn.addEventListener('click', ()=>setFilter(b.key));
      tabsWrap.appendChild(btn);
    });
  }

  // 生成品牌下拉（手機）
  function buildSelect(){
    // 清空 existing options except first "All"
    [...selectEl.options].forEach((opt,i)=>{ if(i>0) selectEl.removeChild(opt); });
    brands.slice(1).forEach(b=>{
      const opt = document.createElement('option');
      opt.value = b.key;
      opt.textContent = b.name;
      selectEl.appendChild(opt);
    });
    selectEl.addEventListener('change', ()=>{
      setFilter(selectEl.value);
    });
  }

  // 依品牌過濾產品
  function filterProducts(brandKey){
    if(!brandKey || brandKey === 'all') return PRODUCTS;
    return PRODUCTS.filter(p=>p.brandKey === brandKey);
  }

  // 渲染卡片
  function renderCards(list){
    grid.innerHTML = '';
    if(!list.length){
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');
    const frag = document.createDocumentFragment();

    list.forEach(p=>{
      const card = document.createElement('article');
      card.className = 'product-card';

      const a = document.createElement('a');
      a.className = 'product-link';
      a.href = `product.html?id=${encodeURIComponent(p.id)}`;
      a.setAttribute('aria-label', `${p.name} — view details`);

      const thumb = document.createElement('div');
      thumb.className = 'product-thumb';
      const img = document.createElement('img');
      img.src = p.hero || '';
      img.alt = `${p.brand || ''} ${p.name || ''}`;
      thumb.appendChild(img);

      const body = document.createElement('div');
      body.className = 'product-body';

      const brand = document.createElement('div');
      brand.className = 'product-brand';
      brand.textContent = p.brand || p.brandKey || '';

      const name = document.createElement('div');
      name.className = 'product-name';
      name.textContent = p.name || '';

      const desc = document.createElement('div');
      desc.className = 'product-desc';
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

  // 設定並渲染過濾
  function setFilter(brandKey='all', pushHash=true){
    // 更新桌機 chip 狀態
    tabsWrap.querySelectorAll('.brand-chip').forEach(ch=>{
      const isActive = ch.getAttribute('data-brand') === brandKey;
      ch.classList.toggle('is-active', isActive);
      ch.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    // 更新手機 select
    if(selectEl.value !== brandKey){
      selectEl.value = brandKey;
    }
    // 渲染
    renderCards(filterProducts(brandKey));
    // 更新 URL hash（可分享/返回）
    if(pushHash){
      if(brandKey === 'all') history.replaceState(null,'', 'products.html');
      else history.replaceState(null,'', `products.html#${brandKey}`);
    }
  }

  // 從 hash 讀取預設品牌
  function getInitialBrand(){
    const h = (location.hash || '').replace('#','').trim();
    return h && brandMap.has(h) ? h : 'all';
  }

  // 初始化
  document.addEventListener('DOMContentLoaded', ()=>{});
  (function boot(){
    if(!PRODUCTS.length){
      renderCards([]); // 顯示 empty
      return;
    }
    buildChips();
    buildSelect();
    setFilter(getInitialBrand(), /*pushHash*/false);

    // 允許使用者直接點品牌錨點切換
    window.addEventListener('hashchange', ()=>{
      setFilter(getInitialBrand(), /*pushHash*/false);
    });

    // 可選：根據品牌更新標題（英文站）
    const current = getInitialBrand();
    if(current !== 'all'){
      const brandName = (brandMap.get(current)||{}).name || current;
      document.title = `${brandName} Products — Aplus Systems`;
    }else{
      document.title = `Products — Aplus Systems`;
    }
  })();
})();