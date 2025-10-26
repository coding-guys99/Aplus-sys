/* products.js — Black & Gold + i18n + Filter */

(function () {
  // 簡單品牌清單（順序即 chips/下拉順序）
  const BRANDS = [
    { key:'blackmagic', name:'Blackmagic Design', logo:'./assets/brands/Blackmagicdesign.png' },
    { key:'synco',      name:'SYNCO',            logo:'./assets/brands/SYNCO.svg' },
    { key:'unileader',  name:'Uni-Leader',       logo:'./assets/brands/UNI-LEADER.svg' },
    { key:'obsbot',     name:'OBSBOT',           logo:'./assets/brands/OBSBOT.svg' },
    { key:'acemic',     name:'Acemic',           logo:'./assets/brands/ACEMIC.svg' },
    { key:'yamaha',     name:'Yamaha Mixer',     logo:'./assets/brands/YAMAHA.svg' },
    { key:'mipro',      name:'MIPRO',            logo:'./assets/brands/MIPRO.svg' },
    { key:'mls',        name:'MLS LED',          logo:'./assets/brands/MLS.svg' },
    { key:'obs',        name:'OBS',              logo:'./assets/brands/OBS.svg' },
    { key:'unreal',     name:'Unreal Engine',    logo:'./assets/brands/UNREALENGINE.svg' },
    { key:'ndi',        name:'NDI',              logo:'./assets/brands/NDI.svg' },
    { key:'streamdeck', name:'StreamDeck',       logo:'./assets/brands/STREAMDECK.svg' }
  ];

  // 產品索引（圖片/ID 在這裡，文案走 i18n）
  // 每個 item: { id:'atem_mini_iso', img:'...', link:'...' }，文案鍵 products.{brand}.{id}.title/desc/spec1/spec2...
  const productsData = {
    blackmagic: [
      { id:'atem_mini_iso', img:'./assets/products/bmd-atem-mini-extreme-iso.jpg', link:'https://www.blackmagicdesign.com' },
      { id:'studio_cam_4k', img:'./assets/products/bmd-studio-camera-4k-pro-g2.jpg' },
      { id:'ursa_bcast_g2', img:'./assets/products/bmd-ursa-broadcast-g2.jpg' },
      { id:'decklink_8k',   img:'./assets/products/bmd-decklink-8k-pro.jpg' },
      { id:'hyperdeck_hd',  img:'./assets/products/bmd-hyperdeck-studio-hd.jpg' }
    ],
    synco: [
      { id:'g2_a2',         img:'./assets/products/synco-g2-a2-kit.jpg' },
      { id:'mic_d2',        img:'./assets/products/synco-mic-d2-shotgun.jpg' }
    ],
    obsbot: [
      { id:'tiny_4k',       img:'./assets/products/obsbot-tiny-4k.jpg' },
      { id:'tail_air',      img:'./assets/products/obsbot-tail-air.jpg' }
    ],
    // 其餘品牌先留空也可以，頁面會顯示空狀態
  };

  // i18n 取字（用你的 lang.js → window.t）
  const t = (k, d='') => (typeof window.t === 'function' ? (window.t(k) ?? d) : d);

  // DOM
  const row    = document.querySelector('.brand-row');
  const select = document.getElementById('brand-select');
  const grid   = document.getElementById('product-grid');
  const empty  = document.getElementById('empty-hint');

  // 建立 chips / select
  function buildPickers() {
    // select options
    BRANDS.forEach(b=>{
      const opt = document.createElement('option');
      opt.value = b.key;
      opt.textContent = b.name;
      select.appendChild(opt);
    });

    // chips
    BRANDS.forEach((b,i)=>{
      const chip = document.createElement('button');
      chip.className = 'brand-chip';
      chip.setAttribute('role','tab');
      chip.setAttribute('aria-selected', i===0 ? 'true' : 'false');
      chip.dataset.key = b.key;

      const img = document.createElement('img');
      img.src = b.logo; img.alt = b.name;

      const span = document.createElement('span');
      span.textContent = b.name;

      chip.append(img, span);
      chip.addEventListener('click', ()=> activateBrand(b.key));
      row.appendChild(chip);
    });

    // select change
    select.addEventListener('change', () => activateBrand(select.value));
  }

  // 啟用品牌（chips 樣式 + 渲染 grid）
  function activateBrand(key){
    // chips 樣式
    document.querySelectorAll('.brand-chip').forEach(ch=>{
      ch.setAttribute('aria-selected', ch.dataset.key===key ? 'true' : 'false');
    });
    // select 同步
    select.value = key;

    renderGrid(key);
    // 深連結 hash
    if (key==='all') history.replaceState(null,'','#products-page');
    else history.replaceState(null,'',`#brand=${key}`);
  }

  // 渲染產品卡
  function renderGrid(key){
    grid.innerHTML = '';
    let items = [];

    if (key==='all'){
      // 合併所有品牌
      Object.keys(productsData).forEach(k => {
        items = items.concat(productsData[k].map(x=>({...x, brand:k})));
      });
    } else {
      const arr = productsData[key] || [];
      items = arr.map(x=>({...x, brand:key}));
    }

    if (!items.length){
      empty.hidden = false;
      return;
    }
    empty.hidden = true;

    const frag = document.createDocumentFragment();
    items.forEach(item=>{
      const card = document.createElement('article');
      card.className = 'product-card';

      // media
      const media = document.createElement('div');
      media.className = 'product-media';
      const img = document.createElement('img');
      img.src = item.img; img.alt = t(`products.${item.brand}.${item.id}.title`, item.id);
      media.appendChild(img);

      // body
      const body = document.createElement('div');
      body.className = 'product-body';

      const title = document.createElement('h3');
      title.className = 'product-title';
      title.textContent = t(`products.${item.brand}.${item.id}.title`, item.id);

      const brand = document.createElement('div');
      brand.className = 'product-brand';
      brand.innerHTML = BRANDS.find(b=>b.key===item.brand)?.name + ` <span class="pill">${item.brand.toUpperCase()}</span>`;

      const desc = document.createElement('p');
      desc.className = 'product-desc';
      const descTxt = t(`products.${item.brand}.${item.id}.desc`, '');
      if (descTxt) desc.textContent = descTxt;

      const ul = document.createElement('ul');
      ul.className = 'product-spec';
      for (let i=1;i<=5;i++){
        const s = t(`products.${item.brand}.${item.id}.spec${i}`, null);
        if (!s) break;
        const li = document.createElement('li');
        li.textContent = s;
        ul.appendChild(li);
      }

      body.append(title, brand);
      if (descTxt) body.appendChild(desc);
      if (ul.children.length) body.appendChild(ul);

      // actions
      const act = document.createElement('div');
      act.className = 'product-actions';

      const btn1 = document.createElement('a');
      btn1.className = 'btn primary';
      btn1.href = 'contact.html';
      btn1.setAttribute('data-i18n','prod.card.cta1');
      btn1.textContent = t('prod.card.cta1','Plan this in my system');

      const btn2 = document.createElement('a');
      btn2.className = 'btn ghost';
      btn2.target = '_blank';
      btn2.rel = 'noopener';
      btn2.href = item.link || '#';
      btn2.setAttribute('data-i18n','prod.card.cta2');
      btn2.textContent = t('prod.card.cta2','View official page');

      act.append(btn1, btn2);

      card.append(media, body, act);
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  // 深連結 #brand=xxx
  function getBrandFromHash(){
    const m = location.hash.match(/brand=([a-z0-9_\-]+)/i);
    return m ? m[1] : 'all';
  }

  // i18n 變更時，重繪（維持當前品牌）
  document.addEventListener('i18n:changed', () => {
    const cur = select.value || 'all';
    renderGrid(cur);
  });

  // boot
  document.addEventListener('DOMContentLoaded', ()=>{
    buildPickers();
    activateBrand(getBrandFromHash());
  });
})();