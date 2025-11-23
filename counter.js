function createCounter() {
    let count = 0; // private variable

    return {
        increment() {
            count++;
            console.log("Current count:", count);
        },

        decrement() {
            count--;
            console.log("Current count:", count);
        }
    };
}
console.log(" Counter Example ");

const counter1 = createCounter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1

const counter2 = createCounter();
counter2.increment(); // 1
counter2.increment(); // 2
counter2.decrement(); // 1

function createBankAccount() {
    let balance = 0; 
    let transactionHistory = [];  // private variable

    return {
        deposit(amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push(`Failed withdrawal: ${amount}`);
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
        },

        getBalance() {
            console.log(`Current balance: ${balance}`);
        },

        getHistory() {
            console.log("Transaction History:", transactionHistory);
        }
    };
}


// Example usage for Q2
console.log("---- Bank Account Example ----");

const account = createBankAccount();

account.deposit(500);     // Deposited: 500
account.withdraw(200);    // Withdrawn: 200
account.withdraw(400);    // Insufficient balance

account.getBalance();     // Current balance: 300
account.getHistory();     // Shows all transactions

console.log(account.balance); // undefined (private)
// (balance is not accessible directly)
