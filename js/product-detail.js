/* =========================================================
   product-detail.js — 單一產品詳情頁（支援 i18nKey）
   ========================================================= */

function qs(sel){ return document.querySelector(sel); }
function getParam(name){ return new URLSearchParams(location.search).get(name); }
function el(tag,cls){ const e=document.createElement(tag); if(cls) e.className=cls; return e; }

/* ---- i18n helpers ---- */
function resolvePath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
}
function tt(key, fallback = null) {
  // 優先使用全域 window.t（你的 lang.js 已提供）
  if (typeof window.t === 'function') {
    const v = window.t(key);
    return (v === undefined || v === null || v === '') ? fallback : v;
  }
  // 後備讀 i18nDict
  const dict = window.i18nDict || {};
  const v = resolvePath(dict, key);
  return (v === undefined || v === null || v === '') ? fallback : v;
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getParam('id');
  const store = window.PRODUCT_DATA || window.PRODUCTS || {};
  const data = store[id];
  const notfound = qs('#notfound');
  const main = qs('main');

  // refs
  const crumbBrand = qs('#crumb-brand'),
        crumbName  = qs('#crumb-name'),
        pName      = qs('#p-name'),
        pTag       = qs('#p-tagline'),
        pHero      = qs('#p-hero'),
        pThumbs    = qs('#p-thumbs'),
        pBrand     = qs('#p-brand'),
        pBrandLogo = qs('#p-brand-logo'),
        pBadges    = qs('#p-badges'),
        pDesc      = qs('#p-desc'),
        pSpec      = qs('#p-spec'),
        pFeat      = qs('#p-features'),
        ctaBrand   = qs('#cta-brand');

  if (!data) {
    if (notfound) notfound.classList.remove('hidden');
    if (main) main.style.display = 'none';
    document.title = 'Product Not Found — Aplus Systems';
    return;
  }

  const baseKey = data.i18nKey || null;

  function getLocalized() {
    // 文字優先取 i18n，無則回退 data
    const name    = baseKey ? tt(`${baseKey}.name`,    data.name)    : data.name;
    const tagline = baseKey ? tt(`${baseKey}.tagline`, data.tagline) : data.tagline;
    const desc    = baseKey ? tt(`${baseKey}.desc`,    data.desc)    : data.desc;

    // 陣列欄位
    const badges  = (baseKey ? tt(`${baseKey}.badges`,  data.badges)  : data.badges)  || [];
    const features= (baseKey ? tt(`${baseKey}.features`,data.features): data.features)|| [];

    // 規格：若語言包有整個 map，就直接用；否則回退原本 data.specs
    let specs = data.specs || {};
    if (baseKey) {
      const specOverride = tt(`${baseKey}.specs`, null);
      if (specOverride && typeof specOverride === 'object') {
        specs = specOverride;
      }
    }

    return { name, tagline, desc, badges, features, specs };
  }

  function render() {
    const L = getLocalized(); // 取得目前語系的文案

    // Title / Breadcrumb
    document.title = `${L.name} — ${data.brand} | Aplus Systems`;
    if (crumbBrand) {
      crumbBrand.textContent = data.brand;
      crumbBrand.href = `products.html#${data.brandKey}`;
    }
    if (crumbName) crumbName.textContent = L.name;

    // Hero / Brand
    if (pName) pName.textContent = L.name;
    if (pTag) pTag.textContent = L.tagline || '';
    if (pBrand) pBrand.textContent = data.brand;
    if (pBrandLogo) pBrandLogo.src = data.brandLogo;
    if (pHero) pHero.src = data.hero;

    // Thumbnails
    if (pThumbs) {
      pThumbs.innerHTML = '';
      (data.images || [data.hero]).forEach((src, i) => {
        const img = el('img');
        img.src = src;
        if (i === 0) img.classList.add('active');
        img.onclick = () => {
          if (pHero) pHero.src = src;
          [...pThumbs.children].forEach(c => c.classList.remove('active'));
          img.classList.add('active');
        };
        pThumbs.appendChild(img);
      });
    }

    // Badges
    if (pBadges) {
      pBadges.innerHTML = '';
      (L.badges || []).forEach(b => {
        const li = el('li');
        li.textContent = b;
        pBadges.appendChild(li);
      });
    }

    // Description（允許簡單 HTML：如 <br> 或 <strong>）
    if (pDesc) {
      const hasHtml = typeof L.desc === 'string' && /<\/?[a-z][\s\S]*>/i.test(L.desc);
      if (hasHtml) pDesc.innerHTML = L.desc; else pDesc.textContent = L.desc || '';
    }

    // Specs
    if (pSpec) {
      pSpec.innerHTML = '';
      const s = L.specs || {};
      if (pSpec.tagName === 'TBODY') {
        Object.keys(s).forEach(k => {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${k}</td><td>${s[k]}</td>`;
          pSpec.appendChild(tr);
        });
      } else {
        const dl = document.createElement('dl');
        Object.keys(s).forEach(k => {
          const dt = document.createElement('dt');
          dt.textContent = k;
          const dd = document.createElement('dd');
          dd.textContent = s[k];
          dl.appendChild(dt);
          dl.appendChild(dd);
        });
        pSpec.appendChild(dl);
      }
    }

    // Features
    if (pFeat) {
      pFeat.innerHTML = '';
      (L.features || []).forEach(f => {
        const li = el('li');
        li.textContent = f;
        pFeat.appendChild(li);
      });
    }

    // CTA
    if (ctaBrand) ctaBrand.href = `technologies.html#${data.brandKey}`;
  }

  // 初次渲染
  render();

  // 語言切換時即時更新（你的 lang.js 會在切換時 dispatch 這個事件）
  document.addEventListener('i18n:changed', render);
});