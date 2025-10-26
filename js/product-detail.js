function qs(sel){return document.querySelector(sel);}
function getParam(name){return new URLSearchParams(location.search).get(name);}
function el(tag,cls){const e=document.createElement(tag);if(cls)e.className=cls;return e;}

document.addEventListener('DOMContentLoaded',()=>{
  const id = getParam('id');
  const data = window.PRODUCT_DATA[id];
  const notfound = qs('#notfound');
  const main = qs('main');

  // refs
  const crumbBrand=qs('#crumb-brand'),crumbName=qs('#crumb-name');
  const pName=qs('#p-name'),pTag=qs('#p-tagline');
  const pHero=qs('#p-hero'),pThumbs=qs('#p-thumbs');
  const pBrand=qs('#p-brand'),pBrandLogo=qs('#p-brand-logo');
  const pBadges=qs('#p-badges'),pDesc=qs('#p-desc');
  const pSpec=qs('#p-spec'),pFeat=qs('#p-features');
  const ctaBrand=qs('#cta-brand');

  // 沒資料：顯示 Not Found
  if(!data){
    notfound.classList.remove('hidden');
    main.style.display='none';
    document.title='Product Not Found — Aplus Systems';
    return;
  }

  // Title / Breadcrumb
  document.title=`${data.name} — ${data.brand} | Aplus Systems`;
  crumbBrand.textContent=data.brand;
  crumbBrand.href=`products.html#${data.brandKey}`;
  crumbName.textContent=data.name;

  // Hero
  pName.textContent=data.name;
  pTag.textContent=data.tagline||'';
  pBrand.textContent=data.brand;
  pBrandLogo.src=data.brandLogo;
  pHero.src=data.hero;

  // Thumbnails
  pThumbs.innerHTML='';
  (data.images||[data.hero]).forEach((src,i)=>{
    const img=el('img');img.src=src;if(i===0)img.classList.add('active');
    img.onclick=()=>{pHero.src=src;[...pThumbs.children].forEach(c=>c.classList.remove('active'));img.classList.add('active');};
    pThumbs.appendChild(img);
  });

  // Badges
  pBadges.innerHTML='';
  (data.badges||[]).forEach(b=>{const li=el('li');li.textContent=b;pBadges.appendChild(li);});

  // Desc
  pDesc.textContent=data.desc||'';

  // Specs
  pSpec.innerHTML='';
  const s=data.specs||{};
  for(const k in s){
    const tr=el('tr');
    tr.innerHTML=`<td>${k}</td><td>${s[k]}</td>`;
    pSpec.appendChild(tr);
  }

  // Features
  pFeat.innerHTML='';
  (data.features||[]).forEach(f=>{const li=el('li');li.textContent=f;pFeat.appendChild(li);});

  // CTA
  ctaBrand.href=`technologies.html#${data.brandKey}`;
});