const toggleBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

  const openModalBtn = document.getElementById('openModalBtn');
  const transactionModal = document.getElementById('transactionModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtn.onclick = () => transactionModal.style.display = "block";
  closeModalBtn.onclick = () => transactionModal.style.display = "none";
  window.addEventListener('click', (event) => {
    if (event.target === transactionModal) transactionModal.style.display = "none";
  });

  function handleClick(action) {
    alert(`Clicked on: ${action}`);
    // You can redirect or call functions here
  }

  const openMoreOptionsBtn = document.getElementById("openMoreOptionsBtn");
  const moreOptionsModal = document.getElementById("moreOptionsModal");
  const closeMoreOptionsBtn = document.getElementById("closeMoreOptionsBtn");

  openMoreOptionsBtn.onclick = () => moreOptionsModal.style.display = "block";
  closeMoreOptionsBtn.onclick = () => moreOptionsModal.style.display = "none";
  window.addEventListener('click', function (event) {
    if (event.target === moreOptionsModal) moreOptionsModal.style.display = "none";
  });

const searchIcon = document.getElementById("searchIcon");
const searchContainer = document.getElementById("searchContainer");

searchIcon.onclick = () => {
  searchContainer.classList.toggle("active");
  const input = document.getElementById("searchInput");
  if (searchContainer.classList.contains("active")) {
    input.focus();
  } else {
    input.value = ""; // Clear input when collapsed
  }
};
