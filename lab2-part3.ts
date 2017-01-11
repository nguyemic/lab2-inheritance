class account{
    constructor(private initialBalance:number, private ownerName:string, private transaction?:number){
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.transaction = 0;
    }

    checkBalance(){
        console.log(this.initialBalance);
    }
    
    deposit(add:number){
        return this.initialBalance += add;
    }

}

class checkingAccount extends account{
    private initialBalance:number;
    private ownerName:string;

    withdraw(change:number){
        return this.initialBalance -= change;
    }
}

class savingsAccount extends account{
    private initialBalance:number;
    private ownerName:string;
    private transaction:number;

    withdraw(change:number){
        if(this.transaction<4){
            this.transaction++;
            return this.initialBalance -= change;

        } else {
            console.log('error');
        }
    }
}