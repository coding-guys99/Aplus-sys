/* =========================================================
   brand-modal.js (i18n 版)
   - 卡片 .brand-card[data-brand] 開啟品牌介紹
   - 文案來自 lang/*.json → brands.{key}.*
   - JS 只維護「不變的資源」：logo 路徑、產品圖片清單
   - 語言切換時（i18n:changed）若面板開啟，會即時重繪
   ========================================================= */

(function () {
  // ---------- 工具：安全取字 t() ----------
  function resolvePath(obj, path) {
    return path.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
  }
  function t(key, fallback = '') {
    // 優先用全域 window.t（若你的 lang.js 有提供）
    if (typeof window.t === 'function') {
      const v = window.t(key);
      return v != null ? v : fallback;
    }
    // 退回讀 i18nDict
    const dict = window.i18nDict || {};
    const v = resolvePath(dict, key);
    return v != null ? v : fallback;
  }

  // ---------- DOM ----------
  const sheet   = document.getElementById('brand-sheet');
  const content = sheet?.querySelector('.sheet-content');
  const titleEl = document.getElementById('sheet-title');
  const descEl  = document.getElementById('sheet-desc');
  const logoEl  = document.getElementById('sheet-logo');
  const gallery = document.getElementById('sheet-gallery');
  if (!sheet || !content || !titleEl || !descEl || !logoEl || !gallery) return;

  // ---------- 媒體資料（固定資源；文案由 JSON 提供） ----------
  // 建議：每張產品圖有一個 id，對應 JSON 的 brands.{key}.gallery.{id}.caption
  const BRANDS = {
    blackmagic: {
      logo: "./assets/brands/Blackmagicdesign.png",
      products: [
        { id: "atem_mini",    src: "./assets/products/bmd-atem-mini-extreme-iso.jpg" },
        { id: "studio_cam",   src: "./assets/products/bmd-studio-camera-4k-pro-g2.jpg" },
        { id: "ursa_bcast",   src: "./assets/products/bmd-ursa-broadcast-g2.jpg" },
        { id: "decklink",     src: "./assets/products/bmd-decklink-8k-pro.jpg" },
        { id: "hyperdeck",    src: "./assets/products/bmd-hyperdeck-studio-hd.jpg" },
        { id: "resolve",      src: "./assets/products/bmd-davinci-resolve.jpg" }
      ]
    },
    synco: {
      logo: "./assets/brands/SYNCO.svg",
      products: [
        { id: "g2a2",       src: "./assets/products/synco-g2-a2-kit.jpg" },
        { id: "d2_shotgun", src: "./assets/products/synco-mic-d2-shotgun.jpg" },
        { id: "d30",        src: "./assets/products/synco-d30-oncamera.jpg" },
        { id: "accessories",src: "./assets/products/synco-accessories.jpg" }
      ]
    },
    unileader: {
      logo: "./assets/brands/UNI-LEADER.svg",
      products: [
        { id: "u_caster_4k", src: "./assets/products/unileader-u-caster-4k.jpg" },
        { id: "u_studio_4k", src: "./assets/products/unileader-u-studio-4k.jpg" },
        { id: "u_cg",        src: "./assets/products/unileader-u-cg.jpg" },
        { id: "u_meta_v",    src: "./assets/products/unileader-u-meta-v.jpg" },
        { id: "u_mooc",      src: "./assets/products/unileader-u-mooc.jpg" }
      ]
    },
    obsbot: {
      logo: "./assets/brands/OBSBOT.svg",
      products: [
        { id: "tiny_4k",  src: "./assets/products/obsbot-tiny-4k.jpg" },
        { id: "tiny_2",   src: "./assets/products/obsbot-tiny-2.jpg" },
        { id: "tail_air", src: "./assets/products/obsbot-tail-air.jpg" },
        { id: "tiny_se",  src: "./assets/products/obsbot-tiny-se.jpg" }
      ]
    },
    acemic: {
      logo: "./assets/brands/ACEMIC.svg",
      products: [
        { id: "wireless_8ch", src: "./assets/products/acemic-micpack-8ch-wireless.jpg" },
        { id: "iem_4ch",      src: "./assets/products/acemic-iempack-4ch.jpg" },
        { id: "ad900",        src: "./assets/products/acemic-ad-900-antenna-dist.jpg" },
        { id: "ad600",        src: "./assets/products/acemic-ad-600-antenna-iem.jpg" },
        { id: "g4",           src: "./assets/products/acemic-g4-wireless.jpg" },
        { id: "em_d01",       src: "./assets/products/acemic-em-d01-ear-monitor.jpg" }
      ]
    },
    yamaha: {
      logo: "./assets/brands/YAMAHA.svg",
      products: [
        { id: "tf5",  src: "./assets/products/yamaha-tf5.jpg" },
        { id: "dm3s", src: "./assets/products/yamaha-dm3s.jpg" },
        { id: "m7cl", src: "./assets/products/yamaha-m7cl.jpg" },
        { id: "ql5",  src: "./assets/products/yamaha-ql5.jpg" }
      ]
    },
    mipro: {
      logo: "./assets/brands/MIPRO.svg",
      products: [
        { id: "act32h",  src: "./assets/products/mipro-act32h.jpg" },
        { id: "act312",  src: "./assets/products/mipro-act312.jpg" },
        { id: "mi58",    src: "./assets/products/mipro-mi58-iem.jpg" },
        { id: "ad900",   src: "./assets/products/mipro-ad900.jpg" }
      ]
    },
    mls: {
      logo: "./assets/brands/MLS.svg",
      products: [
        { id: "p1_92",   src: "./assets/products/mls-module-1_92.jpg" },
        { id: "p2_5",    src: "./assets/products/mls-module-2_5.jpg" },
        { id: "wall",    src: "./assets/products/mls-wall.jpg" },
        { id: "ctrl",    src: "./assets/products/mls-controller.jpg" }
      ]
    },
    obs: {
      logo: "./assets/brands/OBS.svg",
      products: [
        { id: "ui",       src: "./assets/products/obs-ui-screenshot.jpg" },
        { id: "plugin",   src: "./assets/products/obs-plugin-keystroke.jpg" },
        { id: "output",   src: "./assets/products/obs-output-stream.jpg" },
        { id: "multisc",  src: "./assets/products/obs-multi-scene.jpg" }
      ]
    },
    unreal: {
      logo: "./assets/brands/UNREALENGINE.svg",
      products: [
        { id: "vsnap",    src: "./assets/products/unreal-vscreenshot.jpg" },
        { id: "viz",      src: "./assets/products/unreal-uviz.jpg" },
        { id: "graph",    src: "./assets/products/unreal-graph-editor.jpg" },
        { id: "liveset",  src: "./assets/products/unreal-live-set.jpg" }
      ]
    },
    ndi: {
      logo: "./assets/brands/NDI.svg",
      products: [
        { id: "logo",     src: "./assets/products/ndi-logo.jpg" },
        { id: "diagram",  src: "./assets/products/ndi-flow-diagram.jpg" },
        { id: "mixer",    src: "./assets/products/ndi-mixer-integration.jpg" },
        { id: "capture",  src: "./assets/products/ndi-capture-card.jpg" }
      ]
    },
    streamdeck: {
      logo: "./assets/brands/STREAMDECK.svg",
      products: [
        { id: "sd_32",  src: "./assets/products/streamdeck-32.jpg" },
        { id: "sd_xl",  src: "./assets/products/streamdeck-xl.jpg" },
        { id: "sd_mob", src: "./assets/products/streamdeck-mobile.jpg" },
        { id: "sd_pro", src: "./assets/products/streamdeck-pro.jpg" }
      ]
    }
  };

  // ---------- 狀態 ----------
  let activeKey = null;
  let lastActiveTrigger = null;
  let isOpen = false;

  // ---------- 渲染 ----------
  function renderBrandSheet(key) {
    const media = BRANDS[key];
    if (!media) return;

    // 名稱 / 敘述（來自 i18n）
    const name = t(`brands.${key}.name`, key);
    const desc = t(`brands.${key}.desc`, '');

    titleEl.textContent = name || '';
    // desc 允許 <strong><br> 這類簡單標籤（字串由你自己的 JSON 提供）
    if (desc && /<\/?[a-z][\s\S]*>/i.test(desc)) {
      descEl.innerHTML = desc;
    } else {
      descEl.textContent = desc || '';
    }

    // Logo（固定資源）
    logoEl.src = media.logo || '';
    logoEl.alt = name ? `${name} logo` : 'Brand logo';

    // Gallery
    gallery.innerHTML = '';
    const list = Array.isArray(media.products) ? media.products : [];
    if (list.length) {
      gallery.style.display = 'grid';
      list.forEach(item => {
        const id  = typeof item === 'string' ? null : item.id;
        const src = typeof item === 'string' ? item    : item.src;

        const wrap = document.createElement('figure');
        wrap.className = 'tile';

        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = src;
        const captionTxt = id ? t(`brands.${key}.gallery.${id}.caption`, name) : name;
        img.alt = captionTxt || name || 'Product image';

        img.addEventListener('load', () => {
          const r = img.naturalWidth / img.naturalHeight;
          wrap.classList.remove('ar-16x9', 'ar-4x3', 'ar-1x1');
          if (r >= 1.55)      wrap.classList.add('ar-16x9'); // 寬圖
          else if (r <= 1.1)  wrap.classList.add('ar-1x1');  // 方圖
          else                wrap.classList.add('ar-4x3');  // 其他
        }, { once: true });

        wrap.appendChild(img);

        // 有 caption 就加
        if (captionTxt) {
          const fc = document.createElement('figcaption');
          fc.textContent = captionTxt;
          wrap.appendChild(fc);
        }

        gallery.appendChild(wrap);
      });
    } else {
      gallery.style.display = 'none';
    }
  }

  // ---------- 開關 ----------
  function openSheet(key, triggerEl = null) {
    activeKey = key;
    lastActiveTrigger = triggerEl || null;

    renderBrandSheet(key);

    sheet.classList.remove('hidden', 'is-closing');
    void sheet.offsetWidth; // reflow 以重置動畫
    sheet.classList.add('is-opening');

    document.body.style.overflow = 'hidden';
    isOpen = true;

    setTimeout(() => {
      titleEl.setAttribute('tabindex', '-1');
      titleEl.focus({ preventScroll: true });
    }, 10);
  }

  function closeSheet() {
    if (!isOpen) return;
    sheet.classList.remove('is-opening');
    sheet.classList.add('is-closing');

    const onAnimEnd = (e) => {
      if (e.target !== content) return;
      sheet.classList.add('hidden');
      sheet.classList.remove('is-closing');
      content.removeEventListener('animationend', onAnimEnd);
    };
    content.addEventListener('animationend', onAnimEnd);

    document.body.style.overflow = '';
    isOpen = false;

    if (lastActiveTrigger) {
      lastActiveTrigger.focus();
      lastActiveTrigger = null;
    }
  }

  // ---------- 綁定卡片 ----------
  document.querySelectorAll('.brand-card').forEach(card => {
    const key = card.dataset.brand;
    if (!key) return;
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => openSheet(key, card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSheet(key, card); }
    });
  });

  // ---------- 關閉行為 ----------
  sheet.addEventListener('click', (e) => { if (e.target === sheet) closeSheet(); });
  document.addEventListener('keydown', (e) => { if (isOpen && e.key === 'Escape') closeSheet(); });

  // 手機：下滑關閉
  let touchStartY = null, dragging = false;
  content.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartY = e.touches[0].clientY; dragging = true;
  }, { passive: true });
  content.addEventListener('touchmove', (e) => {
    if (!dragging || touchStartY == null) return;
    const delta = e.touches[0].clientY - touchStartY;
    const atTop = content.scrollTop <= 0;
    if (delta > 0 && atTop) {
      e.preventDefault();
      content.style.transform = `translateY(${delta * 0.5}px)`;
    }
  }, { passive: false });
  content.addEventListener('touchend', (e) => {
    if (!dragging) return;
    const endY = (e.changedTouches && e.changedTouches[0].clientY) || 0;
    const delta = endY - (touchStartY || 0);
    content.style.transform = '';
    if (delta > 80) closeSheet();
    dragging = false; touchStartY = null;
  });

  // ---------- 語言切換後即時更新 ----------
  document.addEventListener('i18n:changed', () => {
    if (isOpen && activeKey) renderBrandSheet(activeKey);
  });
})();