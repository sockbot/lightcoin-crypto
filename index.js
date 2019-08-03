// let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this._amount = amount;
    this.account = account;
  }
  commit() {
    console.log("Commit this:", this.isAllowed()) // WHY IS this.isAllowed() not a function???
    // if (!this.isAllowed()) {
    if (false) {
      console.log("Transaction failed. Account balance is", this.account.balance);
      return;
    }
    this.time = new Date();
    this.account.addTransaction(this);
  }
}


class Account {

  constructor(username) {
    this.username = username;
    // account balance starts at 0
    this.transactions = [];
    // this._balance = this.balance
  }

  get balance() {
    // calculate the balance using the transaction objects.
    return this.transactions.reduce((total, transaction) => {
      // console.log("Transaction:", transaction)
      return total + transaction.value;
    }, 0);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);

  }
}

class Withdrawal extends Transaction {

  get value() {
    return this._amount * -1;
  }

  isAllowed() {
    console.log("isAllowed:", this)
    return true;
  }

}

class Deposit extends Transaction {

  get value() {
    return this._amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
// console.log(myAccount);


let t1 = new Withdrawal(10, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);
// console.log(myAccount)
// console.log("Balance:", myAccount.balance)
let t2 = new Withdrawal(12, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

let t3 = new Deposit(30.00, myAccount);
t3.commit();
// console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance);
