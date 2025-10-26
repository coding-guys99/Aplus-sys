/* =========================================================
   product-detail.js — 單一產品詳情頁
   ========================================================= */

function qs(sel){ return document.querySelector(sel); }
function getParam(name){ return new URLSearchParams(location.search).get(name); }
function el(tag,cls){ const e=document.createElement(tag); if(cls) e.className=cls; return e; }

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

  // 沒資料：顯示 Not Found
  if (!data) {
    if (notfound) notfound.classList.remove('hidden');
    if (main) main.style.display = 'none';
    document.title = 'Product Not Found — Aplus Systems';
    return;
  }

  // Title / Breadcrumb
  document.title = `${data.name} — ${data.brand} | Aplus Systems`;
  if (crumbBrand) {
    crumbBrand.textContent = data.brand;
    crumbBrand.href = `products.html#${data.brandKey}`;
  }
  if (crumbName) crumbName.textContent = data.name;

  // Hero
  if (pName) pName.textContent = data.name;
  if (pTag) pTag.textContent = data.tagline || '';
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
    (data.badges || []).forEach(b => {
      const li = el('li');
      li.textContent = b;
      pBadges.appendChild(li);
    });
  }

  // Description
  if (pDesc) pDesc.textContent = data.desc || '';

  // Specs
  if (pSpec) {
    pSpec.innerHTML = '';
    const s = data.specs || {};
    if (pSpec.tagName === 'TBODY') {
      // pSpec 是 <tbody>：輸出表格列
      Object.keys(s).forEach(k => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${k}</td><td>${s[k]}</td>`;
        pSpec.appendChild(tr);
      });
    } else {
      // pSpec 不是 <tbody>：用 dl 顯示
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
    (data.features || []).forEach(f => {
      const li = el('li');
      li.textContent = f;
      pFeat.appendChild(li);
    });
  }

  // CTA
  if (ctaBrand) ctaBrand.href = `technologies.html#${data.brandKey}`;
});