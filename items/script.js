function logClick(action) {
  console.log(`Clicked on: ${action}`);
  if (action === 'filter') toggleFilter();
  if(action === 'more') toggleMoreMenu();
  if(action === 'show all') toggleShowAllMenu();
}
  function toggleFilter() {
  const panel = document.getElementById("filterPanel");
  panel.classList.toggle("open");
}
function toggleMoreMenu() {
  const menu = document.getElementById("moreDropdown");
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function toggleShowAllMenu() {
  const dropdown = document.getElementById("showAllDropdown");
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener("click", function (e) {
  const dropdown = document.getElementById("moreDropdown");
  const button = document.querySelector(".more-button");

  const showAllBtn = document.querySelector(".showall-button");
  const showAllMenu = document.getElementById("showAllDropdown");

  if (!dropdown.contains(e.target) && !button.contains(e.target)) {
    dropdown.style.display = "none";
  }
    if (
    !showAllMenu.contains(e.target) &&
    !showAllBtn.contains(e.target)
  ) {
    showAllMenu.style.display = "none";
  }

});
function toggleType() {
  const isService = document.getElementById("typeToggle").checked;
  console.log(isService ? "Services selected" : "Product selected");

  const productForm = document.getElementById("entryForm");
  const serviceForm = document.getElementById("itemForm");

  if (isService) {
    productForm.style.display = "none";
    serviceForm.style.display = "block";
  } else {
    productForm.style.display = "block";
    serviceForm.style.display = "none";
  }
}

let rmCount = 0;
let acCount = 0;

function addRawMaterial() {
  openRawMaterialModal();
  rmCount++;
  document.getElementById("rm-count").textContent = rmCount;

  const container = document.getElementById("rawMaterialContainer");
  const div = document.createElement("div");
  div.className = "item-box";
  div.innerHTML = `
    <p><strong>item name here</strong></p>
    <p>quantity required: 10</p>
    <p>purchase rate: $150</p>
    <p>estimated cost: <strong>$1500</strong></p>
    <button class="remove-btn" onclick="showDeleteAlert(this, 'rm')">🗑️</button>
  
    `;
  container.appendChild(div);
}

function addAdditionalCost() {
    openModal('additionalCostModal');
  resetAdditionalCostFields();

  acCount++;
  document.getElementById("ac-count").textContent = acCount;

  const container = document.getElementById("additionalCostContainer");
  const div = document.createElement("div");
  div.className = "item-box";
  div.innerHTML = `
    <p><strong>labour charge</strong></p>
    <p class="estimated-cost">estimated cost: $100</p>
    <button class="remove-btn" onclick="removeItem(this, 'ac')">🗑️</button>
  `;
  container.appendChild(div);
}

function removeItem(button, type) {
  button.parentElement.remove();
  if (type === 'rm') {
    rmCount--;
    document.getElementById("rm-count").textContent = rmCount;
  } else {
    acCount--;
    document.getElementById("ac-count").textContent = acCount;
  }
}
function openRawMaterialModal() {
  document.getElementById("rawMaterialModal").style.display = "flex";
  resetModalFields();
}

function closeRawMaterialModal() {
  document.getElementById("rawMaterialModal").style.display = "none";
}

function updateEstimatedCost() {
  const qty = parseFloat(document.getElementById("rm-qty").value) || 0;
  const rate = parseFloat(document.getElementById("rm-rate").value) || 0;
  document.getElementById("rm-estimated").textContent = qty * rate;
}

function resetModalFields() {
  document.getElementById("rm-name").value = "";
  document.getElementById("rm-qty").value = "";
  document.getElementById("rm-unit").value = "";
  document.getElementById("rm-rate").value = "";
  document.getElementById("rm-estimated").textContent = "0";
}

function saveRawMaterial() {
  const name = document.getElementById("rm-name").value;
  const qty = document.getElementById("rm-qty").value;
  const unit = document.getElementById("rm-unit").value;
  const rate = document.getElementById("rm-rate").value;
  const cost = qty * rate;

  const container = document.getElementById("rawMaterialContainer");
  const div = document.createElement("div");
  div.className = "item-box";
  div.innerHTML = `
    <p><strong>${name}</strong></p>
    <p>quantity required: ${qty} ${unit}</p>
    <p>purchase rate: $${rate}</p>
    <p>estimated cost: <strong>$${cost}</strong></p>
    <button class="remove-btn" onclick="removeItem(this, 'rm')">🗑️</button>
  `;
  container.appendChild(div);

  rmCount++;
  document.getElementById("rm-count").textContent = rmCount;

  closeRawMaterialModal();
}

function saveAndNew(type) {
  if (type === 'ac') {
    saveAdditionalCost();
    openModal('additionalCostModal');
  } else {
    saveRawMaterial();
    openModal('rawMaterialModal');
  }
}
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
function resetAdditionalCostFields() {
  document.getElementById("ac-charge").value = "";
  document.getElementById("ac-cost").value = "";
}

function saveAdditionalCost() {
  const charge = document.getElementById("ac-charge").value;
  const cost = document.getElementById("ac-cost").value;

  const container = document.getElementById("additionalCostContainer");
  const div = document.createElement("div");
  div.className = "item-box";
  div.innerHTML = `
    <p><strong>${charge}</strong></p>
    <p class="estimated-cost">estimated cost: $${cost}</p>
    <button class="remove-btn" onclick="removeItem(this, 'ac')">🗑️</button>
  `;
  container.appendChild(div);

  acCount++;
  document.getElementById("ac-count").textContent = acCount;

  closeModal('additionalCostModal');
}
function toggleModal() {
  const modal = document.getElementById('unitModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function showTab(tab) {
  document.getElementById('singlePanel').classList.toggle('hidden', tab !== 'single');
  document.getElementById('dualPanel').classList.toggle('hidden', tab !== 'dual');

  document.getElementById('singleTab').classList.toggle('active-tab', tab === 'single');
  document.getElementById('dualTab').classList.toggle('active-tab', tab === 'dual');
}

document.getElementById('openUnitModal').addEventListener('click', toggleModal);

  let serials = [];

  function openSerialModal() {
    document.getElementById("serialModal").style.display = "flex";
  }

  function closeSerialModal() {
    document.getElementById("serialModal").style.display = "none";
  }

  function updateSerialList() {
    const list = document.getElementById("serialList");
    const count = document.getElementById("serialCount");
    list.innerHTML = "";

    serials.forEach((serial, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${serial} <span onclick="removeSerial(${index})">x</span>`;
      list.appendChild(li);
    });

    count.textContent = `${serials.length}/500 entered`;
  }

  function addSerial() {
    const input = document.getElementById("serialInput");
    const value = input.value.trim();
    if (value && serials.length < 500) {
      serials.push(value);
      input.value = "";
      updateSerialList();
    }
  }

  function removeSerial(index) {
    serials.splice(index, 1);
    updateSerialList();
  }

  function saveSerials() {
    alert(`Saved ${serials.length} serial numbers.`);
    closeSerialModal();
  }

  function checkGodownSelection() {
    const select = document.getElementById("godownSelect");
    if (select.value === "addNew") {
      openGodownModal();
      select.value = ""; // reset to default
    }
  }

  function openGodownModal() {
    document.getElementById("godownModal").style.display = "flex";
  }

  function closeGodownModal() {
    document.getElementById("godownModal").style.display = "none";
  }

  function saveGodown() {
    const name = document.getElementById("godownName").value.trim();
    const address = document.getElementById("godownAddress").value.trim();

    if (name && address) {
      // Add new option to dropdown
      const select = document.getElementById("godownSelect");
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.insertBefore(option, select.lastElementChild); // before '+ Add New'

      select.value = name; // auto-select the newly added
      closeGodownModal();
    } else {
      alert("Please fill all fields.");
    }
  }

