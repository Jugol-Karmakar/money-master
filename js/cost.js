function getInputNumber() {
  const foodInput = document.getElementById("food-field");
  const foodvalue = parseInt(foodInput.value);
  const rentInput = document.getElementById("rent-field");
  const rentValue = parseInt(rentInput.value);
  const clothInput = document.getElementById("cloth-field");
  const clothValue = parseInt(clothInput.value);
  const totalCost = foodvalue + rentValue + clothValue;
  return totalCost;
}

function expensesNumber() {
  const totalCost = getInputNumber();
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalCost;

  const incomeInput = document.getElementById("income-field");
  const incomeValue = parseInt(incomeInput.value);
  const balance = incomeValue - totalCost;

  const totalBalance = document.getElementById("balance");
  totalBalance.innerText = balance;
}
document.getElementById("calculate-btn").addEventListener("click", function () {
  expensesNumber();
});
