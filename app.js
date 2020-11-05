const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelButton = document.querySelector("#btn-cancel");
const confirmButton = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpenses = document.querySelector("#total-expenses");

let totalExpensesValue = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmButton.addEventListener('click', () => {
    const reason = reasonInput.value;
    const amount = amountInput.value;

    if (reason.trim().length <= 0 ||
        amount <= 0 ||
        amount.trim().length <= 0) {

        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter the valid reason and amount';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        alert.present();

        return;
    }

    const newItem = document.createElement("ion-item");
    newItem.textContent = reason + ": $" + amount;
    expensesList.appendChild(newItem);

    totalExpensesValue += +amount;
    totalExpenses.textContent = totalExpensesValue;
    clear();
});

cancelButton.addEventListener('click', clear);