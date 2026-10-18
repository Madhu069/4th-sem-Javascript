const personAccount = {
    firstName: "Samran",
    lastName: "Rayamajhi",

    incomes: [],
    expenses: [],

    totalIncome() {
        return this.incomes.reduce(
            (total, income) => total + income.amount, 0
        );
    },

    totalExpense() {
        return this.expenses.reduce(
            (total, expense) => total + expense.amount, 0
        );
    },

    accountInfo() {
        return `Name: ${this.firstName} ${this.lastName}`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

personAccount.addIncome("Salary", 50000);
personAccount.addIncome("Freelancing", 10000);
personAccount.addExpense("Food", 5000);
personAccount.addExpense("Transport", 3000);

console.log(personAccount.accountInfo());
console.log("Total Income:", personAccount.totalIncome());
console.log("Total Expense:", personAccount.totalExpense());
console.log("Balance:", personAccount.accountBalance());
