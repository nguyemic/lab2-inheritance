class checkingAccount{
    private initialBalance:number;
    private ownerName:string;

    constructor(initialBalance:number, ownerName:string){
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(add:number){
        return this.initialBalance += add;
    }

    withdraw(change:number){
        return this.initialBalance -= change;
    }

    checkBalance(){
        console.log(this.initialBalance);
    }
}