const products = {
  blackmagic: [
    { id:"atem-mini", name:"ATEM Mini Extreme ISO", brand:"Blackmagic Design", thumb:"./assets/products/bmd-atem-mini-extreme-iso.jpg", desc:"多路 HDMI 導播機，支援多畫面與 ISO 錄製。" },
    { id:"ursa-broadcast", name:"URSA Broadcast G2", brand:"Blackmagic Design", thumb:"./assets/products/bmd-ursa-broadcast-g2.jpg", desc:"廣播級攝影機，支援 SDI 與 B4 鏡頭介面。" }
  ],
  unileader: [
    { id:"u-caster-4k", name:"U-Caster 4K", brand:"Uni-Leader", thumb:"./assets/products/unileader-u-caster-4k.jpg", desc:"導播、錄製、串流一體的 4K 導播系統。" },
    { id:"u-meta-v", name:"U-Meta V", brand:"Uni-Leader", thumb:"./assets/products/unileader-u-meta-v.jpg", desc:"Unreal 虛擬棚引擎整合平台。" }
  ],
  yamaha: [
    { id:"tf5", name:"TF5 Mixer", brand:"Yamaha", thumb:"./assets/products/yamaha-tf5.jpg", desc:"專業數位混音台，支援多軌錄音與場景記憶。" }
  ]
};

// --- DOM ---
const grid = document.getElementById('productGrid');
const chipBtns = document.querySelectorAll('.brand-chips button');
const brandSelect = document.getElementById('brandSelect');

// --- Render ---
function renderProducts(brand='all') {
  grid.innerHTML = '';
  const list = brand==='all' ? Object.values(products).flat() : products[brand] || [];
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.thumb}" class="product-thumb" alt="${p.name}">
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
      </div>`;
    card.addEventListener('click', ()=> location.href=`product.html?id=${p.id}`);
    grid.appendChild(card);
  });
}

// --- Event ---
chipBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    chipBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.brand);
  });
});

brandSelect?.addEventListener('change', e=>{
  renderProducts(e.target.value);
});

// --- Init ---
renderProducts('all');