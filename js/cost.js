// Get the input value using function
function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputFieldText = inputField.value;
  const amountValue = parseFloat(inputFieldText);

  // inputField.value = "";
  return amountValue;
}

// Error Handling Function
function handleError(errorID, message) {
  const errorText = document.getElementById(errorID);
  errorText.innerHTML = message;
}

// Get expense using function
function getExpense() {
  const foodCost = getInputValue("food-field");
  const rentCost = getInputValue("rent-field");
  const clothesCost = getInputValue("clothes-field");

  // Check whether number or not
  if (!isNaN(foodCost) && !isNaN(rentCost) && !isNaN(clothesCost)) {
    // Check whether negative or not
    if (foodCost < 0) {
      handleError("food-error", "Can't be negative");
    }
    if (rentCost < 0) {
      handleError("rent-error", "Can't be negative");
    }
    if (clothesCost < 0) {
      handleError("clothes-error", "Can't be negative");
    }
    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
      return foodCost + rentCost + clothesCost;
    } else {
      return 0;
    }
  } else {
    // Error message when not a number
    if (isNaN(foodCost)) {
      handleError("food-error", "Not a number");
    }
    if (isNaN(rentCost)) {
      handleError("rent-error", "Not a number");
    }
    if (isNaN(clothesCost)) {
      handleError("clothes-error", "Not a number");
    }
  }
}

function getBalance(total, deduct, isSavings) {
  // Handling negative income
  if (total < 0 && !isSavings) {
    handleError("income-error", "Can't be negative");
  }

  // Handling non number income
  if (isNaN(total)) {
    handleError("income-error", "Not a number");
  }

  if (total > deduct && total >= 0 && !isNaN(total)) {
    const balance = total - deduct;
    return balance;
  } else {
    if (isSavings) {
      handleError("savings-balance-error", "Not Enough Balance");
      return 0;
    } else {
      handleError("balance-error", "Not Enough Balance");
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
  const expense = getExpense();
  const balance = getBalance(income, expense, false);

  setValue("expense-amount", expense);
  setValue("balance-amount", balance);
});

document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputValue("income-field");
  const percent = getInputValue("percent-field");

  if (!isNaN(percent) && percent > 0 && percent <= 100) {
    const expense = getExpense();
    const percentOfIncome = income * (percent / 100);
    const balanceBeforeSaving = getBalance(income, expense, false);
    const balanceAfterSaving = getBalance(
      balanceBeforeSaving,
      percentOfIncome,
      true
    );

    if (percentOfIncome < balanceBeforeSaving) {
      setValue("saving-amount", percentOfIncome);
    }
    setValue("remaining-amount", balanceAfterSaving);
  } else {
    handleError("percent-error", "Invalid percentage");
  }
});

// Values can't be negative
// Expense can't be greater than
