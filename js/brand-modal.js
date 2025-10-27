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
    },
    synco: {
      logo: "./assets/brands/SYNCO.svg",
      
    },
    unileader: {
      logo: "./assets/brands/UNI-LEADER.svg",
      
    },
    obsbot: {
      logo: "./assets/brands/OBSBOT.svg",
      
    },
    acemic: {
      logo: "./assets/brands/ACEMIC.svg",
      
    },
    yamaha: {
      logo: "./assets/brands/YAMAHA.svg",
      
    },
    mipro: {
      logo: "./assets/brands/MIPRO.svg",
      
    },
    mls: {
      logo: "./assets/brands/MLS.svg",
      
    },
    obs: {
      logo: "./assets/brands/OBS.svg",
      
    },
    unreal: {
      logo: "./assets/brands/UNREALENGINE.svg",
      
    },
    ndi: {
      logo: "./assets/brands/NDI.svg",
      
    },
    streamdeck: {
      logo: "./assets/brands/STREAMDECK.svg",
      
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
    
      // --- 新增：更新 CTA 的 products 連結 ---
  const productLink = document.getElementById('sheet-products');
  if (productLink) productLink.href = `products.html#${key}`;

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

  // --- 在現有 touchmove 監聽中加入【頂/底邊界】攔截 ---
content.addEventListener('touchmove', (e) => {
  if (!dragging || touchStartY == null) return;
  const currentY = e.touches[0].clientY;
  const delta = currentY - touchStartY;

  const atTop    = content.scrollTop <= 0;
  const atBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1;

  // ▼ 已有：往下拉且在頂部 → 跟隨位移（下滑關閉的手勢）
  if (delta > 0 && atTop) {
    e.preventDefault(); // 阻止整頁滾動
    content.style.transform = `translateY(${delta * 0.5}px)`;
    return;
  }

  // ▼ 新增：往上滑且在底部 → 阻止背景被捲動
  if (delta < 0 && atBottom) {
    e.preventDefault(); // 阻止整頁滾動/串連
    return;
  }

  // 其餘情況：正常滾動，不處理
}, { passive: false });

// --- 針對滑鼠滾輪/觸控板（桌面/Android）也避免滾動外溢 ---
content.addEventListener('wheel', (e) => {
  const atTop    = content.scrollTop <= 0;
  const atBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1;

  const scrollingUp   = e.deltaY < 0;
  const scrollingDown = e.deltaY > 0;

  if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
    e.preventDefault(); // 不讓滾動串到背景
  }
}, { passive: false });

  // ---------- 語言切換後即時更新 ----------
  document.addEventListener('i18n:changed', () => {
    if (isOpen && activeKey) renderBrandSheet(activeKey);
  });
})();