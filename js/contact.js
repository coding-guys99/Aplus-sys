document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  const copyBtn = document.getElementById('copy-email');

  // 複製 Email
  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('hello@aplussys.co');
      note.textContent = 'Email copied: hello@aplussys.co';
    } catch {
      note.textContent = 'Copy failed. Please copy manually: hello@aplussys.co';
    }
  });

  // 簡易人類驗證
  function isHuman() {
    const v = form.querySelector('input[name="human"]')?.value.trim();
    return v === '7';
  }

  // mailto 體驗優化（無後端時）
  form?.addEventListener('submit', (e) => {
    // 若未來你改成 Formspree/自架 API，請把這段改為 fetch(...) 即可
    if (!isHuman()) {
      e.preventDefault();
      note.textContent = 'Please answer the human check correctly.';
      return;
    }
    // 讓 mailto 內容更可讀
    const data = new FormData(form);
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Organization: ${data.get('org') || '-'}`,
      `Project Type: ${data.get('type')}`,
      `Timeline: ${data.get('timeline') || '-'}`,
      '',
      `Message:`,
      `${data.get('message')}`
    ].join('\n');

    // 組 mailto
    const to = 'hello@aplussys.co';
    const subject = encodeURIComponent('Aplus Systems — Project Inquiry');
    const mailBody = encodeURIComponent(body);
    form.setAttribute('action', `mailto:${to}?subject=${subject}&body=${mailBody}`);

    note.textContent = 'Opening your mail app…';
  });
});