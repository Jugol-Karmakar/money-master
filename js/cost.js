// get input
function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputFieldText = inputField.value;
  const amountValue = parseFloat(inputFieldText);
  return amountValue;
}

// Get expense
function getExpenseTotal() {
  const foodCost = getInputValue("food-field");
  const rentCost = getInputValue("rent-field");
  const clothesCost = getInputValue("clothes-field");

  if (!isNaN(foodCost) && !isNaN(rentCost) && !isNaN(clothesCost)) {
    // Check whether negative or not
    if (foodCost < 0) {
      errorMessage("food-error", "Can't be negative");
    }
    if (rentCost < 0) {
      errorMessage("rent-error", "Can't be negative");
    }
    if (clothesCost < 0) {
      errorMessage("clothes-error", "Can't be negative");
    }
    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
      return foodCost + rentCost + clothesCost;
    } else {
      return 0;
    }
  } else {
    // Error message when not a number
    if (isNaN(foodCost)) {
      errorMessage("food-error", "Not a number");
    }
    if (isNaN(rentCost)) {
      errorMessage("rent-error", "Not a number");
    }
    if (isNaN(clothesCost)) {
      errorMessage("clothes-error", "Not a number");
    }
  }
}

// Error Handler
function errorMessage(errorID, message) {
  const errorText = document.getElementById(errorID);
  errorText.innerHTML = message;
}

function getBalanceTotal(total, deduct, isSavings) {
  // Handling negative value
  if (total < 0 && !isSavings) {
    errorMessage("income-error", "Can't be negative");
  }

  //  non number income
  if (isNaN(total)) {
    errorMessage("income-error", "Not a number");
  }

  if (total > deduct && total >= 0 && !isNaN(total)) {
    const balance = total - deduct;
    return balance;
  } else {
    if (isSavings) {
      errorMessage("savings-balance-error", "Not Enough Balance");
      return 0;
    } else {
      errorMessage("balance-error", "Not Enough Balance");
      return 0;
    }
  }
}

function setValue(amountID, value) {
  const valueAmount = document.getElementById(amountID);
  valueAmount.innerText = value;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getInputValue("income-field");
  const expense = getExpenseTotalTotal();
  const balance = getBalanceTotal(income, expense, false);

  setValue("expense-amount", expense);
  setValue("balance-amount", balance);
});

document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputValue("income-field");
  const percent = getInputValue("percent-field");

  if (!isNaN(percent) && percent > 0 && percent <= 100) {
    const expense = getExpenseTotal();
    const percentOfIncome = income * (percent / 100);
    const balanceBeforeSaving = getBalanceTotal(income, expense, false);
    const balanceAfterSaving = getBalanceTotal(
      balanceBeforeSaving,
      percentOfIncome,
      true
    );

    if (percentOfIncome < balanceBeforeSaving) {
      setValue("saving-amount", percentOfIncome);
    }
    setValue("remaining-amount", balanceAfterSaving);
  } else {
    errorMessage("percent-error", "Invalid percentage");
  }
});
