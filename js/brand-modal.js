/* =========================================================
   brand-modal.js
   - 點擊 .brand-card（需有 data-brand）開啟品牌介紹
   - 手機：Bottom Sheet；桌機：Center Modal（CSS 已處理）
   - 關閉方式：背景點擊 / ESC / 關閉鈕 / 手機下滑手勢
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- 元素 ----------
  const sheet    = document.getElementById('brand-sheet');
  const content  = sheet?.querySelector('.sheet-content');
  const titleEl  = document.getElementById('sheet-title');
  const descEl   = document.getElementById('sheet-desc');
  const logoEl   = document.getElementById('sheet-logo');
  const gallery  = document.getElementById('sheet-gallery');

  if (!sheet || !content || !titleEl || !descEl || !logoEl || !gallery) return;

  // ---------- 品牌資料（只含 Logo / 名稱 / 介紹；產品圖可選） ----------
  const BRANDS = {
    blackmagic: {
  name: "Blackmagic Design",
  logo: "./assets/brands/Blackmagicdesign.png",
  desc:
    "Blackmagic Design delivers production-proven tools across switching, cameras, capture/IO and post. " +
    "Typical builds include ATEM switchers for live production, URSA/Studio cameras over SDI/NDI, DeckLink for ingest/playout, " +
    "and HyperDeck recorders, with DaVinci Resolve for color and finishing. Ideal for studio, campus TV and hybrid events.",

  // 只放「代表性、辨識度高」的型號；避免放太雜。
  products: [
    "./assets/products/bmd-atem-mini-extreme-iso.jpg",   // ATEM（你的導播核心）
    "./assets/products/bmd-studio-camera-4k-pro-g2.jpg", // Studio Camera（校園/內錄棚）
    "./assets/products/bmd-ursa-broadcast-g2.jpg",       // URSA（廣播級/大型棚）
    "./assets/products/bmd-decklink-8k-pro.jpg",         // DeckLink（擷取/輸出）
    "./assets/products/bmd-hyperdeck-studio-hd.jpg",     // HyperDeck（錄播/回放）
    "./assets/products/bmd-davinci-resolve.jpg"          // DaVinci Resolve（後期）
  ]
},
    synco: {
  name: "SYNCO",
  logo: "./assets/brands/SYNCO.svg",
  desc:
    "Compact on-camera and studio microphones for reliable on-set capture. " +
    "Common use: wireless lav kits for interviews, and shotgun mics for dialogue/VO.",

  // 精選 4 張，型號代表性高、構圖乾淨
  products: [
    "./assets/products/synco-g2-a2-kit.jpg",     // Wireless lav kit（雙通道）
    "./assets/products/synco-mic-d2-shotgun.jpg",// XLR shotgun（對白/棚錄）
    "./assets/products/synco-d30-oncamera.jpg",  // On-camera shotgun（機頂）
    "./assets/products/synco-accessories.jpg"    // 必備配件：防風毛套/冷靴/線材
  ]
},
    unileader: {
  name: "Uni-Leader",
  logo: "./assets/brands/UNI-LEADER.svg",
  desc:
    "Uni-Leader provides integrated broadcast and virtual studio solutions— hardware + software — " +
    "from camera switching (U-Caster 4K), compositing & CG (U-CG), to studio control (U-Studio 4K) and real-time remote learning (U-Mooc).",
  products: [
    "./assets/products/unileader-u-caster-4k.jpg",    // U-Caster 4K 切換器
    "./assets/products/unileader-u-studio-4k.jpg",    // U-Studio 4K 控制臺 / 應用軟體
    "./assets/products/unileader-u-cg.jpg",           // U-CG 視覺合成 / graphic
    "./assets/products/unileader-u-meta-v.jpg",       // U-Meta V 虛擬棚系統
    "./assets/products/unileader-u-mooc.jpg"          // U-Mooc 線上教學系統模組
  ]
},
    obsbot: {
  name: "OBSBOT",
  logo: "./assets/brands/OBSBOT.svg",
  desc:
    "OBSBOT focuses on AI-powered PTZ and tracking cameras, offering smart framing, gesture control, and multi-mode tracking for studio, live streaming, and content creation.",
  products: [
    "./assets/products/obsbot-tiny-4k.jpg",       // Tiny 4K PTZ WebCam  [oai_citation:0‡Obsbots](https://www.obsbot.com/obsbot-tiny-4k-webcam?srsltid=AfmBOor5b4H7ONrGsdPkT3NBeun306NyOYmZ6AdpQ8JKdU7Aamd04J-R&utm_source=chatgpt.com)
    "./assets/products/obsbot-tiny-2.jpg",        // Tiny 2 (Multi-mode AI tracking)  [oai_citation:1‡Obsbots](https://www.obsbot.com/store/products/tiny-2?srsltid=AfmBOopPRCAUVv5Aghj3jTeggjAH3SJH7wAF1FIgBpab0S-2lFt1g88Q&utm_source=chatgpt.com)
    "./assets/products/obsbot-tail-air.jpg",      // Tail Air streaming PTZ camera  [oai_citation:2‡Obsbots](https://www.obsbot.com/obsbot-tail-air-streaming-camera?srsltid=AfmBOoraYPYiScqVKEaQboYZuDdVBmruS07y6DnhpAf6P4nx3rHTTpPW&utm_source=chatgpt.com)
    "./assets/products/obsbot-tiny-se.jpg"        // Tiny SE (1080p tracking webcam)  [oai_citation:3‡The Verge](https://www.theverge.com/2025/1/15/24344635/obsbot-tiny-se-webcam-pan-tilt-zoom-1080p?utm_source=chatgpt.com)
  ]
},
    acemic: {
  name: "Acemic",
  logo: "./assets/brands/ACEMIC.svg",
  desc:
    "Acemic (Honbo Audio) specialises in wireless microphone systems, in-ear monitor systems, and related audio transmission modules. " +
    "Products are widely used in stage, education, broadcast, performance, and recording setups for stable, interference-resistant audio pipelines.",
  products: [
    "./assets/products/acemic-micpack-8ch-wireless.jpg",     // 無線麥克風系統 8 通道
    "./assets/products/acemic-iempack-4ch.jpg",              // 四通道 in-ear 監聽系統
    "./assets/products/acemic-ad-900-antenna-dist.jpg",      // AD-900 天線分配器
    "./assets/products/acemic-ad-600-antenna-iem.jpg",       // AD-600 天線 IEM 分配模組
    "./assets/products/acemic-g4-wireless.jpg",              // G4 無線麥克風系統
    "./assets/products/acemic-em-d01-ear-monitor.jpg"        // EM-D01 in-ear 單通道監聽器
  ]
},
    yamaha: {
  name: "Yamaha Mixer",
  logo: "./assets/brands/YAMAHA.svg",
  desc:
    "Yamaha offers a full line of professional analog and digital mixers tailored for studio, live, and broadcast environments. " +
    "Popular lines include the TF, DM, CL/QL, M7CL, and RIVAGE series for mixing, routing, effects, and recall workflows.  [oai_citation:0‡Yamaha USA](https://usa.yamaha.com/products/proaudio/mixers/index.html?utm_source=chatgpt.com)",
  products: [
    "./assets/products/yamaha-tf5.jpg",     // TF5 數位混音器
    "./assets/products/yamaha-dm3s.jpg",    // DM3S 便攜型數位混音器  [oai_citation:1‡ProAudio](https://proaudio.com/yamaha-dm3s-professional-22-ch-ultracompact-digital-mixer/?srsltid=AfmBOorEPJDUo2rIS351Zmf430RWflkt9oAJN8KSAVZ0LR_zr7P9tTgQ&utm_source=chatgpt.com)
    "./assets/products/yamaha-m7cl.jpg",    // M7CL 數位混音器  [oai_citation:2‡Wikipedia](https://en.wikipedia.org/wiki/Yamaha_M7CL?utm_source=chatgpt.com)
    "./assets/products/yamaha-ql5.jpg"      // QL5 系列之一（假圖示）
  ]
},
    mipro: {
  name: "MIPRO",
  logo: "./assets/brands/MIPRO.svg",
  desc:
    "MIPRO is a Taiwanese pioneer in wireless microphone, portable PA, and in-ear monitoring systems. Their patented ACT (Automatic Channel Targeting) technology enables fast syncing between transmitters and receivers.  [oai_citation:3‡MIPRO](https://www.mipro.com.tw/en?utm_source=chatgpt.com)",
  products: [
    "./assets/products/mipro-act32h.jpg",   // ACT-32H 無線麥克風系統
    "./assets/products/mipro-act312.jpg",   // ACT-312 雙通道收發器  [oai_citation:4‡Touchboards](https://www.touchboards.com/MIPRO-ACT-312/ACT-32T2/?srsltid=AfmBOoofrbfSfJTy5p167xUxRt5pwzyuIAcBs9YBHtc4s0WZEKVyastd&utm_source=chatgpt.com)
    "./assets/products/mipro-mi58-iem.jpg", // MI-58 In-Ear 監聽系統
    "./assets/products/mipro-ad900.jpg"     // AD-900 天線分配器模組
  ]
},
    mls: {
  name: "MLS LED (木林森)",
  logo: "./assets/brands/MLS.svg",
  desc:
    "MLS (木林森) specializes in high-quality LED display modules used for broadcast video walls, stage walls, and virtual set backdrops. Their modules support high refresh rates and fine pixel pitch for crisp video output.",
  products: [
    "./assets/products/mls-module-1_92.jpg",   // 1.92mm 點間隔 LED 模組
    "./assets/products/mls-module-2_5.jpg",    // 2.5mm 模組
    "./assets/products/mls-wall.jpg",          // 組成屏幕牆的展示
    "./assets/products/mls-controller.jpg"     // LED 控制器 / 接口模組
  ]
},
    obs: {
  name: "OBS",
  logo: "./assets/brands/OBS.svg",
  desc:
    "OBS Studio is a free, open-source software suite for video recording and live streaming. It supports multiple video sources, compositing, plugins, virtual cameras, and real-time scene switching.",
  products: [
    "./assets/products/obs-ui-screenshot.jpg",   // OBS 使用者界面截圖
    "./assets/products/obs-plugin-keystroke.jpg",// 插件或插件功能展示
    "./assets/products/obs-output-stream.jpg",   // 輸出串流示意
    "./assets/products/obs-multi-scene.jpg"      // 多場景切換示意
  ]
},
    unreal: {
  name: "Unreal Engine",
  logo: "./assets/brands/UNREALENGINE.svg",
  desc:
    "Unreal Engine is a real-time 3D creation tool used for games, virtual studios, and broadcast graphics. It powers virtual sets, real-time rendering, and interactive visuals.",
  products: [
    "./assets/products/unreal-vscreenshot.jpg",  // 虛擬棚截圖
    "./assets/products/unreal-uviz.jpg",         // 實時渲染視覺
    "./assets/products/unreal-graph-editor.jpg", // 材質 / 节点编辑器
    "./assets/products/unreal-live-set.jpg"      // 虛擬場景搭建範例
  ]
},
    ndi: {
  name: "NDI",
  logo: "./assets/brands/NDI.svg",
  desc:
    "NDI (Network Device Interface) is a low-latency IP video protocol that enables video sources, audio, and metadata to be shared across networks. It powers many modern video workflows in broadcast and content production.",
  products: [
    "./assets/products/ndi-logo.jpg",           // NDI 標誌圖示
    "./assets/products/ndi-flow-diagram.jpg",   // NDI 流程圖
    "./assets/products/ndi-mixer-integration.jpg",// NDI 混合器整合
    "./assets/products/ndi-capture-card.jpg"     // NDI 擷取卡示例
  ]
},
    streamdeck: {
  name: "StreamDeck",
  logo: "./assets/brands/STREAMDECK.svg",
  desc:
    "StreamDeck is a hardware macro controller that lets operators map buttons to actions, shortcuts, or scene changes—greatly enhancing live workflow efficiency.",
  products: [
    "./assets/products/streamdeck-32.jpg",        // StreamDeck 32 按鍵版本
    "./assets/products/streamdeck-xl.jpg",        // StreamDeck XL
    "./assets/products/streamdeck-mobile.jpg",    // StreamDeck Mobile app 界面
    "./assets/products/streamdeck-pro.jpg"        // StreamDeck Pro 進階版本
  ]
}
  };

  // ---------- 開關控制 ----------
  let lastActiveTrigger = null;
  let isOpen = false;

  function populate(data) {
  titleEl.textContent = data.name || '';
  descEl.textContent  = data.desc || '';
  logoEl.src = data.logo || '';
  logoEl.alt = data.name ? `${data.name} logo` : 'Brand logo';

  // 產品圖（可選）
  gallery.innerHTML = '';
  if (Array.isArray(data.products) && data.products.length) {
    gallery.style.display = 'grid';
    data.products.forEach(src => {
      const tile = document.createElement('div');
      tile.className = 'tile';                    // 先用預設 4:3

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = src;
      img.alt = `${data.name} product`;

      img.addEventListener('load', () => {
        const r = img.naturalWidth / img.naturalHeight;
        // 自動判斷比例並套用最適合的容器比例（可依需要調整門檻）
        tile.classList.remove('ar-16x9', 'ar-4x3', 'ar-1x1');
        if (r >= 1.55)      tile.classList.add('ar-16x9'); // 很寬 → 16:9
        else if (r <= 1.1)  tile.classList.add('ar-1x1');  // 接近方形 → 1:1
        else                tile.classList.add('ar-4x3');  // 其他 → 4:3
      }, { once: true });

      tile.appendChild(img);
      gallery.appendChild(tile);
    });
  } else {
    gallery.style.display = 'none';
  }
}

  // 開啟
function openSheet(key, triggerEl = null) {
  const data = BRANDS[key];
  if (!data) return;
  lastActiveTrigger = triggerEl || null;
  populate(data);

  // 先移除關閉狀態，再加開啟動畫
  sheet.classList.remove('hidden', 'is-closing');
  // 觸發 reflow 以重置動畫（少數瀏覽器需要）
  void sheet.offsetWidth;
  sheet.classList.add('is-opening');

  document.body.style.overflow = 'hidden';
  isOpen = true;

  setTimeout(() => { titleEl.setAttribute('tabindex', '-1'); titleEl.focus({ preventScroll: true }); }, 10);
}

// 收回
function closeSheet() {
  if (!isOpen) return;
  sheet.classList.remove('is-opening');
  sheet.classList.add('is-closing');

  // 等待動畫結束再真正隱藏
  const handleEnd = (e) => {
    if (e.target !== content) return; // 只聽內容面板的動畫
    sheet.classList.add('hidden');
    sheet.classList.remove('is-closing');
    content.removeEventListener('animationend', handleEnd);
  };
  content.addEventListener('animationend', handleEnd);

  document.body.style.overflow = '';
  isOpen = false;

  if (lastActiveTrigger) { lastActiveTrigger.focus(); lastActiveTrigger = null; }
}

  // ---------- 綁定卡片（點擊 / 鍵盤） ----------
  document.querySelectorAll('.brand-card').forEach(card => {
    const key = card.dataset.brand;
    if (!key) return;

    // 讓卡片可鍵盤啟動
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => openSheet(key, card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSheet(key, card);
      }
    });
  });

  // ---------- 關閉行為 ----------
  // 點背景關閉（只在點到 sheet 背景時）
  sheet.addEventListener('click', (e) => {
    if (e.target === sheet) closeSheet();
  });

  // ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (isOpen && e.key === 'Escape') closeSheet();
  });

  // 手機：下滑手勢關閉
  let touchStartY = null;
  let dragging = false;

  content.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartY = e.touches[0].clientY;
    dragging = true;
  }, { passive: true });

  content.addEventListener('touchmove', (e) => {
    if (!dragging || touchStartY === null) return;
    const delta = e.touches[0].clientY - touchStartY;

    // 只在向下滑且內容已在最頂（避免與滾動衝突）時才跟隨
    const atTop = content.scrollTop <= 0;
    if (delta > 0 && atTop) {
      e.preventDefault(); // 阻止整頁滾動
      content.style.transform = `translateY(${delta * 0.5}px)`; // 阻尼
    }
  }, { passive: false });

  content.addEventListener('touchend', (e) => {
    if (!dragging) return;
    const endY = (e.changedTouches && e.changedTouches[0].clientY) || 0;
    const delta = endY - (touchStartY || 0);
    content.style.transform = ''; // 還原

    // 超過臨界值則關閉
    if (delta > 80) closeSheet();

    dragging = false;
    touchStartY = null;
  });

});