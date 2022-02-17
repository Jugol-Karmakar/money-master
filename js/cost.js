// get expenses value
function getInputNumber() {
  const foodInput = document.getElementById("food-field");
  const foodvalue = parseInt(foodInput.value);
  const rentInput = document.getElementById("rent-field");
  const rentValue = parseInt(rentInput.value);
  const clothInput = document.getElementById("cloth-field");
  const clothValue = parseInt(clothInput.value);
  const totalCost = foodvalue + rentValue + clothValue;
  foodInput.value = "";
  rentInput.value = "";
  clothInput.value = "";
  return totalCost;
}

function expensesNumber() {
  const totalCost = getInputNumber();
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalCost;

  const incomeInput = document.getElementById("income-field");
  const incomeValue = parseInt(incomeInput.value);
  const incomeMessage = document.getElementById("income-message");
  if (incomeValue < totalCost) {
    incomeMessage.style.display = "block";
  } else {
    const balance = incomeValue - totalCost;
    incomeInput.value = "";
    const totalBalance = document.getElementById("balance");
    totalBalance.innerText = balance;
    incomeMessage.style.display = "none";
  }
}
document.getElementById("calculate-btn").addEventListener("click", function () {
  expensesNumber();
});

// get saving value
function savingNumber() {
  const saveInput = document.getElementById("save-field");
  const saveValue = parseInt(saveInput.value);
  const alertMessage = document.getElementById("alert-message");
  if (isNaN(saveValue)) {
    alertMessage.style.display = "block";
  } else {
    const totalBalance = document.getElementById("balance").innerText;

    const saveBalance = Math.round((totalBalance / 100) * saveValue);

    const savingMoney = document.getElementById("saving-money");
    savingMoney.innerText = saveBalance;

    const remainBalance = document.getElementById("remain-balance");
    const totalRemainingBalance = totalBalance - saveBalance;
    remainBalance.innerText = totalRemainingBalance;
    saveInput.value = "";
    alertMessage.style.display = "none";
  }
}
document.getElementById("save-btn").addEventListener("click", function () {
  savingNumber();
});
