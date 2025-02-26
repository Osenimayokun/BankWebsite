"use strict";

const account1 = {
  owner: "Liam Anderson",
  movements: [1200, -300, 4500, 800, -200, 5000, 7000, -100],
  movementsDates: [
    "2021-03-15T08:23:17.178Z",
    "2021-04-20T14:42:02.383Z",
    "2021-06-12T16:15:04.904Z",
    "2021-07-30T19:17:24.185Z",
    "2021-09-05T22:11:59.604Z",
    "2025-02-20T07:51:36.790Z",
    "2025-02-21T11:36:17.929Z",
    "2025-02-23T09:01:17.194Z",
  ],
  referenceName: [
    "From Williams",
    "To Jessica",
    "To Esther",
    "From Oseni",
    "To Iky",
    "To Allen",
    "From Owlet",
    "To Chapa",
  ],
  transferReach: [],
  savingsBox: [],
  interestRate: 0.13,
  pin: 1111,
  currency: "USD",
  accountType: "Savings",
  createdAt: "2021-03-10",
  locale: "en-US",
  accountNum: 5478454847,
  cardNumber: "8778 4888 1448",
  tier: "Level 2",
  limit: 60000,
  limit2: 60000,
  loan: [],
  target: 45000,
  target2: 45000,
};

const account2 = {
  owner: "Emma Thompson",
  movements: [5000, -1500, 2200, -900, 3500, -450, 7800, -300],
  movementsDates: [
    "2020-02-08T12:31:17.178Z",
    "2020-03-15T16:42:02.383Z",
    "2020-05-10T08:15:04.904Z",
    "2020-07-22T14:17:24.185Z",
    "2020-08-30T19:11:59.604Z",
    "2020-10-05T23:01:17.194Z",
    "2020-11-18T10:36:17.929Z",
    "2021-01-01T06:51:36.790Z",
  ],
  referenceName: [
    "From Williams",
    "To Jessica",
    "To Esther",
    "From Oseni",
    "To Iky",
    "To Allen",
    "From Owlet",
    "To Chapa",
  ],
  transferReach: [],
  savingsBox: [],
  interestRate: 0.16,
  pin: 2222,
  currency: "GBP",
  accountType: "Business",
  createdAt: "2020-02-05",
  locale: "en-GB",
  accountNum: 9584721847,
  cardNumber: "5784 8845 56458",
  tier: "Level 4",
  limit: 50000,
  limit2: 50000,
  loan: [],
  target: 70000,
  target2: 70000,
};

const account3 = {
  owner: "Noah Williams",
  movements: [7500, 7000, -500, 1050, -600, 2000, -750, 1200],
  movementsDates: [
    "2022-06-18T09:21:17.178Z",
    "2022-07-23T13:42:02.383Z",
    "2022-08-28T17:15:04.904Z",
    "2022-09-10T21:17:24.185Z",
    "2022-10-05T02:11:59.604Z",
    "2022-11-14T12:01:17.194Z",
    "2022-12-22T22:36:17.929Z",
    "2023-01-05T15:51:36.790Z",
  ],
  referenceName: [
    "From Williams",
    "To Jessica",
    "To Esther",
    "From Oseni",
    "To Iky",
    "To Allen",
    "From Owlet",
    "To Chapa",
  ],
  transferReach: [],
  savingsBox: [],
  interestRate: 0.12,
  pin: 3333,
  currency: "NGN",
  accountType: "Checking",
  createdAt: "2022-06-10",
  locale: "en-NG",
  accountNum: 465148745,
  cardNumber: "2157 8548 9985",
  tier: "Level 1",
  limit: 100000,
  limit2: 100000,
  target: 30000,
  target2: 30000,
  loan: [],
};

// const account4 = {
//   owner: "Sophia Martinez",
//   movements: [75000, -1200, 31000, -950, 2700, -600, 40000, -1100],
//   movementsDates: [
//     "2019-10-11T07:31:17.178Z",
//     "2019-11-23T11:42:02.383Z",
//     "2019-12-30T18:15:04.904Z",
//     "2020-02-14T12:17:24.185Z",
//     "2020-03-22T16:11:59.604Z",
//     "2020-05-10T20:01:17.194Z",
//     "2020-06-18T09:36:17.929Z",
//     "2020-08-07T05:51:36.790Z",
//   ],
//   referenceName: [
//     "From Williams",
//     "To Jessica",
//     "To Esther",
//     "From Oseni",
//     "To Iky",
//     "To Allen",
//     "From Owlet",
//     "To Chapa",
//   ],
//   transferReach: [],
//   savingsBox: [],
//   interestRate: 0.14,
//   pin: 4444,
//   currency: "JPY",
//   accountType: "Joint",
//   createdAt: "2019-10-05",
//   locale: "ja-jp",
//   accountNum: 588726168,
//   cardNumber: "7877 54852 2539",
//   tier: "Level 3",
//   limit: 110000,
//   limit2: 110000,
//   target: 45000,
//   target2: 45000,
//   loan: [],
// };

const accounts = [account1, account2, account3];

// LOGIN PAGE
const inputLoginUsername = document.querySelector(".login-user");
const inputLoginPIN = document.querySelector(".login-pin");
const btnLogin = document.querySelector(".login-btn");

// POP BUTTON
///////
// LOAN POPUP
const loanAmount = document.querySelector(".loan-amount");
const loanPIN = document.querySelector(".loan-pin");
const btnGetLoan = document.querySelector(".get-loan");

// SAVE POPUP
const saveAmount = document.querySelector(".save-amount");
const savePIN = document.querySelector(".save-pin");
const btnSaveNow = document.querySelector(".get-save");

// REPAY LOAN
const repayAmount = document.querySelector(".repay-amount");
const repayLoanPIN = document.querySelector(".repay-pin");
const btnRepayLoan = document.querySelector(".get-repay");

// WITHDRAW SAVINGS
const withdrawSaveAmount = document.querySelector(".withdraw-save-amount");
const withdrawSavePIN = document.querySelector(".withdraw-save-pin");
const btnWithdrawSave = document.querySelector(".get-withdrawal-save");

//////

// CARD AND ACCOUNT DETAILS
//////
// CARDS
const labelCardName = document.querySelector(".card-name");
const labelCardNum = document.querySelector(".card-number");
const labelCardDate = document.querySelector(".card-date");

// ACCOUNT DETAILS
const labelAccName = document.querySelector(".acc-name");
const labelAccUserName = document.querySelector(".acc-user");
const labelAccNumber = document.querySelector(".acc-num");
const labelAccCardNum = document.querySelector(".acc-card-num");

/////

// NUMBERS ACCOUNT SUMMARY E.G BALANCE, INCOME
const labelTotalBalance = document.querySelector(".total-funds");
const labelBalance = document.querySelector(".balance-total");
const labelTotalSaved = document.querySelectorAll(".saved");
const labelTotalLoan = document.querySelector(".total-loan");
const labelIncome = document.querySelector(".income");
const labelExpenses = document.querySelector(".expenses");

// ////

// SAVINGS
const labelCurrencyType = document.querySelector(".currency-name");
const labelAccountType = document.querySelector(".account-type");
const labelSaveingReach = document.querySelector(".saving-reach");
const labelSaveingGoal = document.querySelector(".saving-goal");
const btnInitSave = document.querySelector(".save-btn-pop");
const btnInitWithdrawSave = document.querySelector(".withdraw-savings-btn-pop");

// LOAN CANCEL btn

const btnInitLoan = document.querySelector(".loan-btn-pop");
const btnClearInput = document.querySelectorAll(".clear-btn");
const btnInitRepayLoan = document.querySelector(".repay-loan-pop");
// TRANSFERS

const labelDailyLimitLevel = document.querySelector(".daliy-limit-level");
const labelDailyLimitAmt = document.querySelector(".daily-limit-amount");
const labelDailyLimitVer = document.querySelector(".daily-limit-ver");
const labelDailyLimitAmtReach = document.querySelector(".daily-limit-reach");
const inputTransferTo = document.querySelector(".transfer-to");
const inputTransferAmount = document.querySelector(".transfer-amount");
const btnTransfer = document.querySelector(".transfer-btn");

const closePopBox = document.querySelectorAll(".btn--close-modal");
// MOVEMENT BOX

const movementBox = document.querySelector(".movements-box");

const cardColor = () => {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
};
// FUNCTIONS RELATED TO MOVEMENTS
const formatNum = (locale, currency, value) => {
  const option = {
    style: "currency",
    currency: currency,
  };
  return new Intl.NumberFormat(locale, option).format(value);
};
const formatDate = (date, locale) => {
  const calcDays = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDays(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
    // console.log(Us)
  }
};
// MOVEMENTS IN TRANSACTION
const displayMovements = (acc) => {
  movementBox.innerHTML = "";
  acc.movements.forEach((mov, i) => {
    // console.log(mov);
    const names = acc.referenceName[i];
    const date = new Date(acc.movementsDates[i]);
    const formattedDate = formatDate(date, acc.locale);
    const formattedMovement = formatNum(acc.locale, acc.currency, mov);
    const amountColor = mov > 0 ? "green" : "red";
    const html = `
    <div class="movements ref">
    <div class="ref-name active">${names}</div>
    <div class="date">${formattedDate}</div>
              <div class="movements-type success-status">Success</div>
                <div class="amount color-${amountColor}">${formattedMovement}</div>
              </div>
    `;
    movementBox.insertAdjacentHTML("afterbegin", html);
  });
};

// ACCOUNT SUMMARY
const displayAccSummary = (acc) => {
  acc.balance = acc.movements.reduce((amt, cur) => amt + cur, 0);
  labelBalance.textContent = formatNum(acc.locale, acc.currency, acc.balance);

  const income = acc.movements
    .filter((acc) => acc > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelIncome.textContent = formatNum(acc.locale, acc.currency, income);

  const expenses = acc.movements
    .filter((acc) => acc < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelExpenses.textContent = formatNum(
    acc.locale,
    acc.currency,
    Math.abs(expenses)
  );

  acc.savingTotal = acc.savingsBox.reduce((amt, cur) => amt + cur, 0);
  labelTotalSaved.forEach((total) => {
    total.textContent = formatNum(acc.locale, acc.currency, acc.savingTotal);
  });
  labelTotalBalance.textContent = formatNum(
    acc.locale,
    acc.currency,
    acc.balance + acc.savingTotal
  );

  const loanedAmt = acc.loan.reduce((amt, cur) => amt + cur, 0);
  labelTotalLoan.textContent = formatNum(
    acc.locale,
    acc.currency,
    Math.abs(loanedAmt)
  );

  const displayGrant = Math.trunc(0.7 * acc.balance);
  const notdisplayGrant =
    loanedAmt === 0
      ? `${formatNum(acc.locale, acc.currency, displayGrant)}`
      : "0. Pay your outstanding loan";
  document.querySelector(".display-grant").textContent = notdisplayGrant;

  const transferReach = acc.transferReach.reduce((acc, cur) => acc + cur, 0);

  if (acc.limit === 0) {
    document.querySelector(".transfer-notice").textContent =
      "You've reached your daily limit. Come back tomorrow!";
  } else {
    document.querySelector(".transfer-notice").innerHTML = "";

    const html = ` <p class="transfer-notice">
                    You've spent
                    <span class="daily-limit-reach active">${formatNum(
                      acc.locale,
                      acc.currency,
                      transferReach
                    )}</span> out of your
                    daily limit
                  </p>`;
    document
      .querySelector(".transfer-notice")
      .insertAdjacentHTML("beforeend", html);
  }

  const trackTransferBar = document.querySelector(".transfer-inner-bar");
  trackTransferBar.style.width = `${(transferReach / acc.limit2) * 100}%`;
  document.querySelector(".target").textContent = formatNum(
    acc.locale,
    acc.currency,
    acc.target
  );
  const savingsReach = acc.savingsBox.reduce((acc, cur) => acc + cur, 0);

  labelSaveingGoal.textContent = formatNum(
    acc.locale,
    acc.currency,
    acc.target
  );

  if (acc.target2 === 0) {
    document.querySelector(".target-not").textContent =
      "Congratulations! On hitting you Target";
  } else {
    document.querySelector(".target-not").innerHTML = "";

    const replaceWord = `<p class="target-not">
                  <span class="saving-reach">${formatNum(
                    acc.locale,
                    acc.currency,
                    acc.target - savingsReach
                  )}</span> more to reach<span
                    class="active saving-goal"
                  >
                    ${formatNum(acc.locale, acc.currency, acc.target)}</span
                  >
                </p>`;
    document
      .querySelector(".target-not")
      .insertAdjacentHTML("beforeend", replaceWord);
  }
  const savingBar = document.querySelector(".inner-savings-bar");
  savingBar.style.width = `${(savingsReach / acc.target) * 100}%`;

  const tofromDate = (acc, locale) => {
    return new Intl.DateTimeFormat(locale, {
      month: "long",
      year: "numeric",
    }).format(new Date(acc));
  };

  document.querySelector(".from-date").textContent = tofromDate(
    acc.movementsDates[0],
    acc.locale
  );

  document.querySelector(".to-date").textContent = tofromDate(
    acc.movementsDates[acc.movementsDates.length - 1],
    acc.locale
  );
};

// ACCOUNT DETAILS FUNCTION
const getUsername = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toUpperCase()
      .split(" ")
      .map((acc) => acc[0])
      .join("");
  });
};
getUsername(accounts);

const displayAccDet = (acc) => {
  labelAccName.textContent = acc.owner;
  labelCardName.textContent = acc.owner;
  labelAccUserName.textContent = acc.username;
  labelAccNumber.textContent = acc.accountNum;
  const cardNumFormatted = acc.cardNumber
    .replaceAll(" ", "")
    .slice(-4)
    .padStart(14, "*");

  labelAccCardNum.textContent = cardNumFormatted;
  labelCardNum.textContent = cardNumFormatted;
  labelCurrencyType.textContent = acc.currency;
  labelAccountType.textContent = acc.accountType;
  labelDailyLimitLevel.textContent = acc.tier;
  labelDailyLimitAmt.textContent = formatNum(
    acc.locale,
    acc.currency,
    acc.limit
  );
};

// INIT POP UP FUNCTIONS
const initPopBtn = (btn, modal) => {
  btn.addEventListener("click", () => {
    document.querySelector(modal).classList.remove("hidden");
  });
};
initPopBtn(btnInitLoan, ".get-loan-modal");
initPopBtn(btnInitSave, ".save-modal");
initPopBtn(btnInitRepayLoan, ".repay-modal");
initPopBtn(btnInitWithdrawSave, ".withdraw-save-modal");
closePopBox.forEach((close) => {
  close.addEventListener("click", () => {
    close.closest(".modal").classList.add("hidden");
  });
});

// NOTIFICATIONS

const confirm = document.querySelector(".confirm");
const successNotification = (message, des) => {
  setTimeout(() => {
    confirm.classList.remove("hidden");
    document.querySelector(".status-message").textContent = message;
    document.querySelector(".des-message").textContent = des;
  }, 1000);
  setTimeout(() => {
    confirm.classList.add("hidden");
  }, 3000);
};

const error = document.querySelector(".error");
const errorNofificaton = (message, des) => {
  setTimeout(() => {
    error.classList.remove("hidden");
    document.querySelector(".error-message").textContent = message;
    document.querySelector(".des-error").textContent = des;
  }, 1000);
  setTimeout(() => {
    error.classList.add("hidden");
  }, 3000);
};

// /////////////////
const updateUI = () => {
  displayMovements(currentAccount);
  displayAccDet(currentAccount);
  displayAccSummary(currentAccount);
};
// IMLEMENTAING LOGIC

// LOGIN

let currentAccount;

const btnLogin2 = document.querySelector(".login-btn2");
const inputLoginUsername2 = document.querySelector(".login-username2");
const inputLoginPIN2 = document.querySelector(".login-PIN2");
const containerBox = document.querySelector(".container");

// LOGIN
btnLogin2.addEventListener("click", (e) => {
  e.preventDefault();

  const PIN = +inputLoginPIN2.value;
  const userName = inputLoginUsername2.value;

  currentAccount = accounts.find(
    (acc) => PIN === acc.pin && userName === acc.username
  );
  inputLoginPIN2.value = inputLoginUsername2.value = "";
  inputLoginPIN2.blur();
  if (currentAccount) {
    updateUI();
    containerBox.classList.remove("none");

    document.querySelector(".card-content").style.background = cardColor();

    // NOTIFICATION
    successNotification("Welcome Back", "You have successfully login");
  } else {
    errorNofificaton("Invalid Login", "Incorrect Username or Password");
  }
});

// TRANSFER

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => inputTransferTo.value === acc.username
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  if (
    amount > 5 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username &&
    currentAccount.limit > 0 &&
    currentAccount.limit >= amount &&
    amount <= currentAccount.balance - 5
  ) {
    currentAccount.movements.push(-amount);
    currentAccount.referenceName.push(`To ${receiverAcc.owner}`);
    currentAccount.movements.push(-5);
    currentAccount.referenceName.push(`Transfer Fee`);
    currentAccount.transferReach.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    receiverAcc.referenceName.push(`From ${currentAccount.owner}`);
    currentAccount.limit = currentAccount.limit - amount;
    if (currentAccount.currency === "USD" && receiverAcc.currency === "NGN") {
      receiverAcc.movements.push(amount * 1500);
    }
    if (currentAccount.currency === "USD" && receiverAcc.currency === "GBP") {
      receiverAcc.movements.push(amount / 1.2);
    }
    if (currentAccount.currency === "GBP" && receiverAcc.currency === "USD") {
      receiverAcc.movements.push(amount * 1.2);
    }
    if (currentAccount.currency === "NGN" && receiverAcc.currency === "USD") {
      receiverAcc.movements.push(amount / 1500);
    }
    if (currentAccount.currency === "NGN" && receiverAcc.currency === "GBP") {
      receiverAcc.movements.push(amount / 1800);
    }
    if (currentAccount.currency === "GBP" && receiverAcc.currency === "NGN") {
      receiverAcc.movements.push(amount * 1800);
    }
    successNotification(
      "Transfer Successful",
      `You Sent ${formatNum(
        currentAccount.locale,
        currentAccount.currency,
        amount
      )} to ${receiverAcc.owner}`
    );

    updateUI();
  } else if (amount < 5) {
    errorNofificaton(
      "Low Amount",
      `The transfer amount must be at least     ${formatNum(
        currentAccount.locale,
        currentAccount.currency,
        "5"
      )}`
    );
  } else if (!receiverAcc) {
    errorNofificaton(
      "Invalid Receiver",
      "The recipient account does not exist"
    );
  } else if (amount > currentAccount.balance) {
    console.log(amount, currentAccount.balance);
    errorNofificaton(
      "Insufficient Balance",
      "Your account balance is too low."
    );
  } else if (amount > currentAccount.limit) {
    errorNofificaton(
      "Exceeds Limit",
      "The transfer amount exceeds your allowed limit"
    );
  } else if (amount > currentAccount.balance - 5) {
    errorNofificaton("Insufficient Balance", "All transaction carries charges");
  }
});

// LOAN

btnGetLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const Notowning = currentAccount.loan.reduce((acc, cur) => acc + cur, 0);
  const amount = +loanAmount.value;
  const PIN = +loanPIN.value;
  loanAmount.value = loanPIN.value = "";
  if (
    Notowning === 0 &&
    currentAccount.balance > 0.7 * currentAccount.balance &&
    amount <= 0.7 * currentAccount.balance &&
    PIN === currentAccount.pin &&
    amount > 0
  ) {
    currentAccount.loan.push(amount * currentAccount.interestRate + amount);
    currentAccount.movements.push(amount);
    currentAccount.referenceName.push("Loan received to account");
    currentAccount.movementsDates.push(new Date().toISOString());

    updateUI();
    document.querySelector(".get-loan-modal").classList.add("hidden");
    successNotification(
      "Loan Granted",
      `${formatNum(
        currentAccount.locale,
        currentAccount.currency,
        amount
      )} has been debited in your account`
    );
  } else if (Notowning > 0) {
    errorNofificaton("Loan Declined", "Repay your outstanding loan");
  } else if (PIN !== currentAccount.pin) {
    errorNofificaton("Loan Declined", "Incorrect PIN");
  } else if (amount < 0) {
    errorNofificaton("Invalid Amount", "Enter a valid Amount");
  } else {
    errorNofificaton("Loan Declined", "Use bank more ofen");
  }
});

// SAVE

btnSaveNow.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = +saveAmount.value;
  const PIN = +savePIN.value;
  saveAmount.value = savePIN.value = "";
  savePIN.blur();
  if (
    currentAccount.balance >= amount &&
    currentAccount.pin === PIN &&
    amount <= currentAccount.target2 &&
    amount > 0
  ) {
    currentAccount.movements.push(-amount);
    currentAccount.referenceName.push("To Target SavingBox");
    currentAccount.savingsBox.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    currentAccount.target2 = currentAccount.target2 - amount;
    console.log(currentAccount.target2);
    updateUI();
    document.querySelector(".save-modal").classList.add("hidden");
    successNotification(
      "Savings Successful",
      `You have successfully saved ${formatNum(
        currentAccount.locale,
        currentAccount.currency,
        amount
      )} to your account`
    );
    if (
      currentAccount.savingsBox.reduce((acc, cur) => acc + cur, 0) ===
      currentAccount.target
    ) {
      successNotification(
        "Goal Reached",
        "Congratulations! On hitting you Target"
      );
    }
  } else if (currentAccount.pin !== PIN) {
    errorNofificaton("Incorrect PIN", "Please enter correct PIN");
  } else if (amount > currentAccount.balance) {
    errorNofificaton(
      "Insufficient Balance",
      "Your account balance is too low."
    );
  } else if (amount < currentAccount.target2) {
    errorNofificaton("Error", "Can save more than your Target");
  } else if (amount < 0) {
    errorNofificaton("Invalid Amount", "Enter a valid Amount");
  }
});

// REPAY LOAN

btnRepayLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +repayAmount.value;
  const PIN = +repayLoanPIN.value;
  const Notowning = currentAccount.loan.reduce((acc, cur) => acc + cur, 0);
  repayAmount.value = repayLoanPIN.value = "";
  repayLoanPIN.blur();
  if (
    Notowning > 0 &&
    currentAccount.balance >= amount &&
    amount <= Notowning &&
    PIN === currentAccount.pin &&
    amount > 0
  ) {
    currentAccount.loan.push(-amount);
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    currentAccount.referenceName.push("Loan repayment");
    updateUI();
    document.querySelector(".repay-modal").classList.add("hidden");
    successNotification(
      "Loan Repaid",
      `You have successfully re-paid ${formatNum(
        currentAccount.locale,
        currentAccount.currency,
        amount
      )}`
    );
  } else if (amount < 0) {
    errorNofificaton("Invalid Amount", "Enter a valid Amount");
  } else {
    errorNofificaton("Error", "Invalid Input");
  }
});

// WITHDRAW SAVINGS

btnWithdrawSave.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +withdrawSaveAmount.value;
  const PIN = +withdrawSavePIN.value;
  withdrawSaveAmount.value = withdrawSavePIN.value = "";
  withdrawSavePIN.blur();
  if (
    amount <= currentAccount.savingTotal &&
    PIN === currentAccount.pin &&
    amount > 0
  ) {
    currentAccount.movements.push(amount);
    currentAccount.referenceName.push("Savings Withdrawal");
    currentAccount.savingsBox.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    currentAccount.target2 = currentAccount.target2 + amount;
    console.log(currentAccount.target2);
    updateUI();
    document.querySelector(".withdraw-save-modal").classList.add("hidden");
    successNotification(
      "Withdrawal Successfully",
      `You withdrawal ${formatNum(
        currentAccount.locale,
        currentAccount.currency,
        amount
      )} into your account`
    );
  } else if (currentAccount.pin !== PIN) {
    errorNofificaton("Incorrect PIN", "Please enter correct PIN");
  } else if (amount > currentAccount.savingTotal) {
    errorNofificaton(
      "Invalid input",
      "You can't withdrawal amount more than your savings"
    );
  } else if (amount < 0) {
    errorNofificaton("Invalid Amount", "Enter a valid Amount");
  }
});

// console.log(document.querySelectorAll("input"));

// CLEAR BUTTON
btnClearInput.forEach((clear) => {
  clear.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  });
});
// CHECK ACCOUNT USER
document.querySelector(".check").addEventListener("click", (e) => {
  e.preventDefault();
  const receiverAcc = accounts.find(
    (acc) => inputTransferTo.value === acc.username
  );
  if (inputTransferTo.value === receiverAcc.username) {
    const receiverName = document.querySelector(".receiver-name");
    receiverName.classList.remove("none");
    receiverName.textContent = receiverAcc.owner;
    setInterval(() => {
      receiverName.classList.add("none");
    }, 3500);
  }
});
