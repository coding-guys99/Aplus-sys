/* ==========================================
   products.js
   - 品牌選擇（桌機：logo row / 手機：select）
   - 依品牌渲染產品卡
   - 支援 ?brand=&product= 深連結
   - 支援 i18n：優先 window.t('key')，否則 fallback
   ========================================== */

(function(){
  // ---------- i18n helpers ----------
  function getDict(){ return window.i18nDict || {}; }
  function resolve(obj, path){
    return path.split('.').reduce((a,k)=> (a && a[k]!=null ? a[k] : null), obj);
  }
  function t(key, fallback=''){
    if (typeof window.t === 'function') {
      const v = window.t(key);
      if (v != null) return v;
    }
    const v = resolve(getDict(), key);
    return v != null ? v : fallback;
  }

  // ---------- Minimal brand/product data ----------
  // 說明：
  // 1) 文案 i18n key：prod.items.{brand}.{id}.{title|summary|tags[n]}
  // 2) 若 i18n 沒填，會使用 title/summary/tags fallback
  const DATA = {
    blackmagic: {
      logo: "./assets/brands/Blackmagicdesign.png",
      name: "Blackmagic Design",
      products: [
        {
          id: "atem-mini-extreme-iso",
          img: "./assets/products/bmd-atem-mini-extreme-iso.jpg",
          title: "ATEM Mini Extreme ISO",
          summary: "8-input 4K live switcher with ISO recording and USB streaming.",
          tags: ["Switching", "ISO record", "USB stream"]
        },
        {
          id: "studio-camera-4k-pro-g2",
          img: "./assets/products/bmd-studio-camera-4k-pro-g2.jpg",
          title: "Studio Camera 4K Pro G2",
          summary: "4K studio camera with SDI/HDMI/NDI workflows.",
          tags: ["Studio", "4K", "NDI/SDI"]
        },
        {
          id: "hyperdeck-studio-hd",
          img: "./assets/products/bmd-hyperdeck-studio-hd.jpg",
          title: "HyperDeck Studio HD",
          summary: "Broadcast recorder for playout and backup.",
          tags: ["Recorder", "Playout", "Backup"]
        }
      ]
    },

    yamaha: {
      logo: "./assets/brands/YAMAHA.svg",
      name: "Yamaha Mixer",
      products: [
        {
          id: "tf5",
          img: "./assets/products/yamaha-tf5.jpg",
          title: "TF5 Digital Mixer",
          summary: "Digital console for live/broadcast mixing with recall workflows.",
          tags: ["Digital", "Live", "Recall"]
        },
        {
          id: "dm3s",
          img: "./assets/products/yamaha-dm3s.jpg",
          title: "DM3S",
          summary: "Ultra-compact digital mixer suited for portable and studio setups.",
          tags: ["Compact", "Portable", "Studio"]
        }
      ]
    },

    obs: {
      logo: "./assets/brands/OBS.svg",
      name: "OBS",
      products: [
        {
          id: "obs-studio",
          img: "./assets/products/obs-ui-screenshot.jpg",
          title: "OBS Studio",
          summary: "Open-source live production and recording with plugin ecosystem.",
          tags: ["Live", "Recording", "Plugins"]
        }
      ]
    },

    ndi: {
      logo: "./assets/brands/NDI.svg",
      name: "NDI",
      products: [
        {
          id: "ndi-tools",
          img: "./assets/products/ndi-flow-diagram.jpg",
          title: "NDI Tools",
          summary: "Low-latency IP video transport toolkit for modern workflows.",
          tags: ["IP Video", "Low latency", "Interconnect"]
        }
      ]
    },

    // 你可持續補上：synco / mipro / obsbot / streamdeck / unreal / unileader / mls...
  };

  // ---------- DOM ----------
  const row = document.querySelector('.brand-row');
  const sel = document.getElementById('brand-select');
  const grid = document.getElementById('product-grid');
  const emptyHint = document.getElementById('empty-hint');

  if (!row || !sel || !grid) return;

  // ---------- build brand UI ----------
  function buildBrands(){
    // 填充 select
    sel.innerHTML = '';
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = t('prod.brand.all','All brands');
    sel.appendChild(optAll);

    Object.entries(DATA).forEach(([key, info])=>{
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = info.name || key;
      sel.appendChild(opt);
    });

    // 填充 desktop chips
    row.innerHTML = '';
    // "All" chip
    const allChip = chip('all', t('prod.brand.all','All brands'), null);
    row.appendChild(allChip);

    Object.entries(DATA).forEach(([key, info])=>{
      const c = chip(key, info.name || key, info.logo || null);
      row.appendChild(c);
    });
  }

  function chip(value, label, logo){
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'brand-chip';
    btn.setAttribute('role','tab');
    btn.setAttribute('aria-selected', 'false');
    btn.dataset.value = value;

    if (logo){
      const img = document.createElement('img');
      img.src = logo;
      img.alt = `${label} logo`;
      img.loading = 'lazy';
      btn.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = label;
    btn.appendChild(span);

    btn.addEventListener('click', ()=>{
      sel.value = value;
      updateActiveChip(value);
      renderProducts(value);
      pushState(value);
    });

    return btn;
  }

  function updateActiveChip(value){
    row.querySelectorAll('.brand-chip').forEach(b=>{
      b.setAttribute('aria-selected', b.dataset.value === value ? 'true' : 'false');
    });
  }

  // ---------- render products ----------
  function renderProducts(brandKey){
    const list = brandKey && brandKey!=='all'
      ? (DATA[brandKey]?.products || [])
      : Object.values(DATA).flatMap(b => b.products || []);
    grid.innerHTML = '';

    if (!list.length){
      emptyHint.hidden = false;
      return;
    }
    emptyHint.hidden = true;

    list.forEach(prod=>{
      grid.appendChild(card(prod, brandKey));
    });
  }

  function card(prod, brandContext){
    // i18n key: prod.items.{brand}.{id}.*
    // 若 brandContext === 'all'，仍用產品自帶標題；或你可在資料裡放 brand 字段
    const brandKey = brandContext && brandContext!=='all'
      ? brandContext
      : findBrandOfProduct(prod.id) || 'unknown';

    const title = t(`prod.items.${brandKey}.${prod.id}.title`,  prod.title || prod.id);
    const summary = t(`prod.items.${brandKey}.${prod.id}.summary`, prod.summary || '');
    const tags = (prod.tags || []).map((tag, i)=> t(`prod.items.${brandKey}.${prod.id}.tags.${i}`, tag));

    const el = document.createElement('article');
    el.className = 'prod-card';

    // media
    const media = document.createElement('div');
    media.className = 'prod-media';
    const img = document.createElement('img');
    img.src = prod.img; img.alt = title; img.loading='lazy'; img.decoding='async';
    media.appendChild(img);

    if (tags && tags.length){
      const bs = document.createElement('div'); bs.className = 'badges';
      tags.forEach(txt=>{
        const b = document.createElement('span'); b.className = 'badge'; b.textContent = txt;
        bs.appendChild(b);
      });
      media.appendChild(bs);
    }

    // body
    const body = document.createElement('div'); body.className = 'prod-body';
    const h3 = document.createElement('h3'); h3.className = 'prod-title'; h3.textContent = title;
    const p  = document.createElement('p');  p.className  = 'prod-summary'; p.textContent = summary;
    body.appendChild(h3); body.appendChild(p);

    // actions
    const act = document.createElement('div'); act.className = 'prod-actions';
    const learn = document.createElement('a');
    learn.className = 'btn ghost';
    learn.href = `technologies.html#${brandKey}`;
    learn.setAttribute('data-i18n','prod.actions.learn');
    learn.textContent = t('prod.actions.learn','Learn more');

    const consult = document.createElement('a');
    consult.className = 'btn primary';
    consult.href = `contact.html?brand=${encodeURIComponent(brandKey)}&product=${encodeURIComponent(prod.id)}`;
    consult.setAttribute('data-i18n','prod.actions.consult');
    consult.textContent = t('prod.actions.consult','Consult on this product');

    act.appendChild(learn); act.appendChild(consult);

    el.appendChild(media);
    el.appendChild(body);
    el.appendChild(act);
    return el;
  }

  function findBrandOfProduct(prodId){
    for (const [k,v] of Object.entries(DATA)){
      if ((v.products||[]).some(p=>p.id===prodId)) return k;
    }
    return null;
  }

  // ---------- URL state ----------
  function parseQS(){
    const u = new URL(location.href);
    return { brand: u.searchParams.get('brand'), product: u.searchParams.get('product') };
  }
  function pushState(brand){
    const u = new URL(location.href);
    if (!brand || brand==='all') u.searchParams.delete('brand');
    else u.searchParams.set('brand', brand);
    history.replaceState(null,'',u);
  }

  // ---------- init ----------
  function init(defaultBrand){
    buildBrands();

    const wanted = defaultBrand && DATA[defaultBrand] ? defaultBrand : 'all';
    document.getElementById('brand-select').value = wanted;
    updateActiveChip(wanted);
    renderProducts(wanted);
  }

  // select change
  document.getElementById('brand-select').addEventListener('change', (e)=>{
    const val = e.target.value;
    updateActiveChip(val);
    renderProducts(val);
    pushState(val);
  });

  // i18n: 重新渲染標籤與卡片文字
  document.addEventListener('i18n:changed', ()=>{
    // 只更新可見
    const { brand } = parseQS();
    buildBrands();
    const current = brand && (DATA[brand] ? brand : 'all') || document.getElementById('brand-select').value || 'all';
    document.getElementById('brand-select').value = current;
    updateActiveChip(current);
    renderProducts(current);
  });

  // boot
  const { brand, product } = parseQS();
  init(brand);

  // 若 URL 帶 product，可自動捲到該卡（渲染後）
  if (product){
    requestAnimationFrame(()=>{
      const cardTitle = Array.from(document.querySelectorAll('.prod-title'))
        .find(el => el.textContent.toLowerCase().includes(product.toLowerCase()));
      if (cardTitle){
        cardTitle.closest('.prod-card').scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  }
})();