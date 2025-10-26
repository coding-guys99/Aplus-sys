// ===== 最小資料：和列表頁使用同 id =====
// 你可把這段移到 products.data.js 與列表共用
window.PRODUCT_DATA = window.PRODUCT_DATA || {
  "atem-mini": {
    id: "atem-mini",
    name: "ATEM Mini Extreme ISO",
    brand: "Blackmagic Design",
    brandKey: "blackmagic",
    brandLogo: "./assets/brands/Blackmagicdesign.png",
    hero: "./assets/products/bmd-atem-mini-extreme-iso.jpg",
    images: [
      "./assets/products/bmd-atem-mini-extreme-iso.jpg",
      "./assets/products/bmd-hyperdeck-studio-hd.jpg",
      "./assets/products/bmd-decklink-8k-pro.jpg"
    ],
    tagline: "8 路 HDMI 導播機，支援 ISO 錄製、SuperSource 與多畫面監看。",
    badges: ["HDMI x8", "ISO Record", "Multiview", "SuperSource"],
    desc: "ATEM Mini Extreme ISO 適合教育直播、企業說明會與多機位導播。內建多畫面監看、轉場、字幕與 USB-C 網路串流輸出，能快速建立穩定的直播工作流。",
    specs: {
      "輸入/輸出": "HDMI 8 In / 2 Out, USB-C, Ethernet",
      "錄製": "ISO 錄製（單機與多軌）",
      "解析度": "1080p60",
      "特殊功能": "SuperSource、上/下鍵、內建音訊處理"
    },
    features: [
      "多來源切換與多畫面監看，快速掌握現場狀態",
      "ISO 錄製便於後期重剪與備援",
      "USB-C/UVC 直連電腦作為網路攝影機",
      "配合 HyperDeck/DeckLink 擴充可升級回放與節點路由"
    ]
  },

  "u-caster-4k": {
    id: "u-caster-4k",
    name: "U-Caster 4K",
    brand: "Uni-Leader",
    brandKey: "unileader",
    brandLogo: "./assets/brands/UNI-LEADER.svg",
    hero: "./assets/products/unileader-u-caster-4k.jpg",
    images: [
      "./assets/products/unileader-u-caster-4k.jpg",
      "./assets/products/unileader-u-studio-4k.jpg"
    ],
    tagline: "一體化 4K 導播/錄製/串流系統，適合校園與企業導播室。",
    badges: ["4K", "All-in-one", "Recording", "Streaming"],
    desc: "U-Caster 4K 整合切換、特效、錄製與串流，搭配 U-Studio 控制台與 U-CG 視覺合成，能在有限人力下完成穩定的節目製播。",
    specs: {
      "輸入介面": "HDMI / SDI（視型號）",
      "錄製格式": "H.264 / ProRes（視型號）",
      "串流": "RTMP / SRT",
      "控制": "U-Studio / 外部面板"
    },
    features: [
      "軟硬體一體化，簡化安裝維護成本",
      "可與 U-CG、U-Studio、U-MetaV 組成完整工作流",
      "適合校園電視台、企業內部直播與遠距教學"
    ]
  },

  "tf5": {
    id: "tf5",
    name: "TF5 Digital Mixer",
    brand: "Yamaha",
    brandKey: "yamaha",
    brandLogo: "./assets/brands/YAMAHA.svg",
    hero: "./assets/products/yamaha-tf5.jpg",
    images: [
      "./assets/products/yamaha-tf5.jpg",
      "./assets/products/yamaha-dm3s.jpg"
    ],
    tagline: "64 通道數位混音器，快速上手且穩定耐用。",
    badges: ["64ch", "Scene", "USB Multi-Track", "Dante(選配)"],
    desc: "TF5 具備直覺操作介面與場景記憶，適合固定展演場與錄播室整合，能穩定處理多麥克風、多來源的混音需求。",
    specs: {
      "通道數": "48 Mono + 1 Stereo + 2 Return",
      "錄音": "USB 多軌錄音",
      "網路音訊": "Dante 選配卡",
      "應用": "教育、禮堂、直播與錄播室"
    },
    features: [
      "場景記憶與快速 EQ/Comp 節點",
      "USB 多軌錄音，簡化錄後剪輯",
      "與校園/企業常見架構高度相容"
    ]
  }
};

// ===== 工具 =====
function qs(sel){return document.querySelector(sel)}
function getParam(name){ return new URLSearchParams(location.search).get(name) }
function el(tag, cls){ const e=document.createElement(tag); if(cls) e.className=cls; return e; }

// ===== 渲染 =====
document.addEventListener('DOMContentLoaded', () => {
  const id = getParam('id');
  const data = window.PRODUCT_DATA[id];

  // DOM refs
  const crumbBrand = qs('#crumb-brand');
  const crumbName  = qs('#crumb-name');
  const pName  = qs('#p-name');
  const pTag   = qs('#p-tagline');
  const pHero  = qs('#p-hero');
  const pThumbs= qs('#p-thumbs');
  const pBrand = qs('#p-brand');
  const pBrandLogo = qs('#p-brand-logo');
  const pBadges = qs('#p-badges');
  const pDesc   = qs('#p-desc');
  const pSpec   = qs('#p-spec');
  const ctaBrand= qs('#cta-brand');

  if(!data){
    pName.textContent = 'Product not found';
    document.title = 'Product — Aplus Systems';
    qs('.info').innerHTML = '<p class="desc">Sorry, we can’t find this product. Please go back to the products page.</p>';
    return;
  }

  // Title / meta
  document.title = `${data.name} — ${data.brand} | Aplus Systems`;

  // Crumbs & hero
  crumbBrand.textContent = data.brand;
  crumbBrand.href = `products.html#${data.brandKey || ''}`;
  crumbName.textContent = data.name;

  pName.textContent = data.name;
  pTag.textContent  = data.tagline || '';
  pBrand.textContent = data.brand;
  pBrandLogo.src = data.brandLogo || '';
  pBrandLogo.alt = `${data.brand} logo`;

  // Gallery
  const imgs = data.images && data.images.length ? data.images : [data.hero];
  pHero.src = imgs[0];
  pHero.alt = data.name;

  pThumbs.innerHTML = '';
  imgs.forEach((src, i)=>{
    const t = document.createElement('img');
    t.src = src; t.alt = `${data.name} image ${i+1}`;
    if(i===0) t.classList.add('active');
    t.addEventListener('click', ()=>{
      pHero.src = src;
      [...pThumbs.children].forEach(n=>n.classList.remove('active'));
      t.classList.add('active');
    });
    pThumbs.appendChild(t);
  });

  // Badges
  pBadges.innerHTML = '';
  (data.badges||[]).forEach(b=>{
    const li = el('li'); li.textContent = b; pBadges.appendChild(li);
  });

  // Desc
  pDesc.textContent = data.desc || '';

  // Specs (簡表)
  pSpec.innerHTML = '';
  const specs = data.specs || {};
  Object.keys(specs).forEach(k=>{
    const tr = el('tr');
    const ktd = el('td'); ktd.textContent = k;
    const vtd = el('td'); vtd.textContent = specs[k];
    tr.appendChild(ktd); tr.appendChild(vtd);
    pSpec.appendChild(tr);
  });

  // Features
  const pFeat = qs('#p-features');
  pFeat.innerHTML = '';
  (data.features||[]).forEach(f=>{
    const li = el('li'); li.textContent = f; pFeat.appendChild(li);
  });

  // CTA brand link to technologies page anchor
  ctaBrand.href = `technologies.html#${data.brandKey || ''}`;

  // 保護滾動：避免底層滾動
  document.querySelectorAll('main, .gallery, .info').forEach(el=>{
    el.style.overscrollBehavior = 'contain';
    el.style.webkitOverflowScrolling = 'touch';
  });
});