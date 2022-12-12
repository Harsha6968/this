class Account{
min_Bal=500
acc_Bal=0
acc_Name=""
    set_AccName(name){
        this.acc_Name=name
    }
    deposit_Amount(Amount){
        this.acc_Bal = this.acc_Bal + Amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}
let a1 = new Account()
let a2=new Account()
a1.deposit_Amount(1000)
a2.deposit_Amount(5000)
a1.set_AccName("harsha")
console.log(a1)
a2.set_AccName("raaji")
console.log(a2)
let r1=a1.get_Bal()
console.log(r1)
