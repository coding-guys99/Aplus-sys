// js/contact-form.js
document.addEventListener("DOMContentLoaded", () => {
  const FORM_ID = "aplus-form";
  const EMAIL_TO = "aplusystem@gmail.com";

  const form = document.getElementById(FORM_ID);
  if (!form) return;

  const nameEl = form.querySelector("#name");
  const emailEl = form.querySelector("#email");
  const subjectEl = form.querySelector("#subject");
  const companyEl = form.querySelector("#company");
  const messageEl = form.querySelector("#message");
  const serviceEl = form.querySelector("#service");
  const budgetEl = form.querySelector("#budget");
  const copyBtn = document.getElementById("copy-brief");

  function showError(el, show) {
    const small = el.parentElement.querySelector(".error");
    if (!small) return;
    small.style.display = show ? "block" : "none";
    el.classList.toggle("is-invalid", !!show);
  }

  function validate() {
    let ok = true;
    // name
    if (!nameEl.value.trim()) { showError(nameEl, true); ok = false; } else showError(nameEl, false);
    // email
    const email = emailEl.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) { showError(emailEl, true); ok = false; } else showError(emailEl, false);
    // subject
    if (!subjectEl.value.trim()) { showError(subjectEl, true); ok = false; } else showError(subjectEl, false);
    return ok;
  }

  function buildBody() {
    const nl = "%0D%0A";
    const esc = (s) => encodeURIComponent(s || "");
    const lines = [
      `Name: ${nameEl.value}`,
      `Email: ${emailEl.value}`,
      `Company/School: ${companyEl.value || "-"}`,
      `Service: ${serviceEl.value}`,
      `Budget: ${budgetEl.value || "-"}`,
      ``,
      `Project Details:`,
      (messageEl.value || "-"),
      ``,
      `— Sent from Aplus Systems website`
    ];
    return esc(lines.join("\n")).replace(/\n/g, nl);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(subjectEl.value.trim() || "Project Inquiry");
    const body = buildBody();
    // 開啟使用者的郵件客戶端
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  });

  // 一鍵複製簡報內容
  copyBtn?.addEventListener("click", async () => {
    const plain = [
      `Name: ${nameEl.value}`,
      `Email: ${emailEl.value}`,
      `Company/School: ${companyEl.value || "-"}`,
      `Service: ${serviceEl.value}`,
      `Budget: ${budgetEl.value || "-"}`,
      ``,
      `Project Details:`,
      (messageEl.value || "-"),
      ``,
      `— Sent from Aplus Systems website`
    ].join("\n");

    try {
      await navigator.clipboard.writeText(plain);
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.textContent = "Copy Brief"; }, 1200);
    } catch {
      alert("Copy failed. Please select and copy manually.");
    }
  });
});