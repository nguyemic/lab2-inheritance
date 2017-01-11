class account{
    constructor(public initialBalance:number, public ownerName:string, public transaction?:number){
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.transaction = 0;
    }

    withdraw(change:number){
        this.initialBalance -=change;
    }

    checkBalance(){
        console.log(`${this.ownerName} account balance: $${this.initialBalance}`);
    }
    
    deposit(add:number){
        return this.initialBalance += add;
    }

}

class CheckingsAccount extends account {
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
}

class SavingsAccount extends account {
    private withdrawals: number = 0;
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
    withdraw(amount: number) {
        if (this.withdrawals <= 3) {
            this.withdrawals = this.withdrawals + 1;
            this.initialBalance = this.initialBalance - amount;
        } else {
            console.log("Sorry, you've exceed 3 withdrawals already!");
        }
    }
}


