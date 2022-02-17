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
  const balance = incomeValue - totalCost;
  incomeInput.value = "";

  const totalBalance = document.getElementById("balance");
  totalBalance.innerText = balance;
}
document.getElementById("calculate-btn").addEventListener("click", function () {
  expensesNumber();
});

document.getElementById("save-btn").addEventListener("click", function () {
  console.log("save click");
  const saveInput = document.getElementById("save-field");
  const saveValue = parseInt(saveInput.value);

  const totalBalance = document.getElementById("balance").innerText;

  const saveBalance = (totalBalance / 100) * saveValue;

  const savingMoney = document.getElementById("saving-money");
  savingMoney.innerText = saveBalance;

  const remainBalance = document.getElementById("remain-balance");
  const totalRemainingBalance = totalBalance - saveBalance;
  remainBalance.innerText = totalRemainingBalance;
  saveInput.value = "";
});
