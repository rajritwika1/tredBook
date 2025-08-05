const modal = document.getElementById('paymentModal');
  const openLink = document.getElementById('paymentHistoryLink');
  const closeBtn = document.getElementById('okBtn');
  const backArrow = document.querySelector('.back-arrow');

  openLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  backArrow.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });