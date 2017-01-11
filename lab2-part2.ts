class savingsAccount{
    private initialBalance:number;
    private ownerName:string;
    private transaction:number;

    constructor(initialBalance:number, ownerName:string){
        this.transaction = 0;
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(add:number){
        return this.initialBalance += add;
    }

    withdraw(change:number){
        if(this.transaction<4){
            this.transaction++;
            return this.initialBalance -= change;

        } else {
            console.log('error');
        }
    }

    checkBalance(){
        console.log(this.initialBalance);
    }
}