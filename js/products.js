/* ==========================================
   products.js — Products listing + filtering (robust)
   ========================================== */

(function(){
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const tabsWrap = document.querySelector('.brand-tabs');
  const selectEl = document.getElementById('brandFilter');

  if(!grid || !tabsWrap || !selectEl){
    console.warn('[products] Missing required DOM nodes.');
    return;
  }

  // 等待 window.PRODUCT_DATA 可用
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

  function render(DATA){
    const PRODUCTS = Object.values(DATA || {});
    console.log(`[products] Loaded ${PRODUCTS.length} products.`);

    // 聚合品牌
    const brandMap = new Map();
    PRODUCTS.forEach(p=>{
      if(!p || !p.brandKey) return;
      if(!brandMap.has(p.brandKey)){
        brandMap.set(p.brandKey, { key:p.brandKey, name:p.brand || p.brandKey });
      }
    });
    const brands = [{key:'all', name:'All'}].concat(
      Array.from(brandMap.values()).sort((a,b)=>a.name.localeCompare(b.name))
    );

    // UI 生成
    buildChips(brands);
    buildSelect(brands);

    // 過濾 + 渲染
    function filterProducts(brandKey){
      if(!brandKey || brandKey === 'all') return PRODUCTS;
      return PRODUCTS.filter(p=>p.brandKey === brandKey);
    }

    // 渲染卡片時
function renderCards(list){
  grid.innerHTML = '';
  if(!list.length){
    if (emptyState) emptyState.classList.remove('hidden'); // ← 加保護
    return;
  }
  if (emptyState) emptyState.classList.add('hidden'); // ← 加保護

  const frag = document.createDocumentFragment();
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'product-card';

    const a = document.createElement('a');
    a.className = 'product-link';
    a.href = `product.html?id=${encodeURIComponent(p.id)}`;
    a.setAttribute('aria-label', `${p.name || ''} — view details`);

    const thumb = document.createElement('div');
    thumb.className = 'product-thumb';
    const img = document.createElement('img');
    img.src = p.hero || '';
    img.alt = `${p.brand || ''} ${p.name || ''}`;
    img.loading = 'lazy';                // ← 懶載入
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

    function setFilter(brandKey='all', pushHash=true){
      // 更新桌機 chips
      tabsWrap.querySelectorAll('.brand-chip').forEach(ch=>{
        const isActive = ch.getAttribute('data-brand') === brandKey;
        ch.classList.toggle('is-active', isActive);
        ch.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      // 更新手機 select
      if(selectEl.value !== brandKey) selectEl.value = brandKey;

      renderCards(filterProducts(brandKey));

      // 更新 hash
      if(pushHash){
        if(brandKey === 'all') history.replaceState(null,'', 'products.html');
        else history.replaceState(null,'', `products.html#${brandKey}`);
      }

      // 可選：更新標題
      if(brandKey !== 'all'){
        const b = brandMap.get(brandKey);
        document.title = `${(b && b.name) || brandKey} Products — Aplus Systems`;
      }else{
        document.title = `Products — Aplus Systems`;
      }
    }

    function getInitialBrand(){
      const h = (location.hash || '').slice(1).trim();
      return h && brandMap.has(h) ? h : 'all';
    }

    // 初始化：Chips / Select
    function buildChips(blist){
      // 先清空 All 之外的
      tabsWrap.querySelectorAll('.brand-chip:not([data-brand="all"])').forEach(n=>n.remove());
      // 確保存在 All chip（HTML 有放一顆）
      let allChip = tabsWrap.querySelector('.brand-chip[data-brand="all"]');
      if(!allChip){
        allChip = document.createElement('button');
        allChip.className = 'brand-chip is-active';
        allChip.textContent = 'All';
        allChip.setAttribute('data-brand','all');
        allChip.setAttribute('aria-pressed','true');
        tabsWrap.appendChild(allChip);
      }
      allChip.addEventListener('click', ()=>setFilter('all'));

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
      blist.slice(1).forEach(b=>{
        const opt = document.createElement('option');
        opt.value = b.key;
        opt.textContent = b.name;
        selectEl.appendChild(opt);
      });
      selectEl.addEventListener('change', ()=> setFilter(selectEl.value));
    }

    // 首次渲染
    setFilter(getInitialBrand(), /*pushHash*/false);

    // 監聽 hash 切換
    window.addEventListener('hashchange', ()=> setFilter(getInitialBrand(), false));
  }

  // 啟動
  document.addEventListener('DOMContentLoaded', ()=>{
    waitForData().then(render).catch(err=>{
      console.warn('[products] Failed to load PRODUCT_DATA:', err);
      // 仍然安全 fallback
      render({});
    });
  });
})();