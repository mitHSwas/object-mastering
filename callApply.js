const normalPerson = {
    firstName: "Tuli",
    lastName: "Gharami",
    salary: 20000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
    }
}
const heroPerson = {
    firstName: "Hero",
    lastName: "Alom",
    salary: 25000,
}
const badamPerson = {
    firstName: "Badam badam",
    lastName: "Kaca badam",
    salary: 15000,
}

normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000);
heroChargeBill(2000)
console.log(heroPerson.salary);

const badamChargeBill = normalPerson.chargeBill.bind(badamPerson);
badamChargeBill(500);
console.log(badamPerson.salary);

normalPerson.chargeBill.call(heroPerson, 1900);
normalPerson.chargeBill.call(heroPerson, 1100);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(badamPerson, 1000, 100, 10)
console.log(badamPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [2000, 200, 20]);
console.log(heroPerson.salary);
