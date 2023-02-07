class BankAccount {
        constructor (accountNumber, owner) {
            this.accountNumber = accountNumber
            this.owner = owner
            this.transactions = []
        }
        balance() {
            let sum = 0;
            for(let i =0; i<this.transactions.length; i++) {
                sum += this.transactions[i].amount;
            }
            return sum;
        }
            deposit(amt) {
                let depositTransaction = new Transaction(this.owner, amt)
                this.transactions.push(depositTransaction)
            }
        
            charge(payee, amt) {
                let chargedTransaction = new Transaction(payee, amt * -1) 
                this.transactions.push(chargedTransaction)
                }

            }

class Transaction {
    constructor(payee, amount) {
        this.payee = payee
        this.amount = amount
        this.date = new Date()
    }
}

let account = new BankAccount(1434, "Joe")
account.deposit(400)
console.log(account.balance())
account.charge("joe", 200)
console.log(account.balance())