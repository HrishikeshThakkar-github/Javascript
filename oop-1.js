// let computer = {cpu:12}

// let lenovo ={screen: "HD",
//     __proto__:computer,
// }

// let tomHardware={};

// //console.log(`lenovo`, lenovo.__proto__);


// let genericcar = {tyres:4}

// let tesla ={
//     driver:"AI"
// }

// Object.setPrototypeOf(tesla,genericcar)

// console.log(`tesla`,tesla);


// console.log(`tesla`,Object.getPrototypeOf(tesla));



// function tea(type){
//     this.type=type;

//     this.describe=function(){
//         return `this is a tea type ${this.type}` ;
        
//     }
// }

// let lemontea=new tea("lemontree");
// console.log(lemontea.describe());


/*
function Animal(species){
    this.species=species;

}

Animal.prototype.sound=function(){
    return `${this.species} makes the sound`;
};


let dog =new Animal("dog")
console.log(dog.sound());


//-------error-----///

function Drink(name){
    if(!new.target){
        throw new Error("drink must be called with new");

    }

    this.name=name;
}

let tea=new Drink("tea");
let coffee = new Drink("coffee")

*/


//objects and inheritance

// let car ={
//     make:"toyota",
//     model:"camry",
//     year:"2020",

//     start:function(){
//         return `${this.make} car is of year ${this.year}`
//     }
// }

// //console.log(car.start());




// function Person(name, age,gender){
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
// }

// let john =new Person("john", 20,"male");


// //protoypal chain


// Person.prototype.gend=function(){
//     return `the gender of the person is : ${this.gender} `
// }

// console.log(
//     john.gend());



// class vehicle{
//     constructor(make,model){
//         this.make=make;
//         this.model=model;
//     }

//     start(){
//         return `${this.make} is a car of ${this.model}`
//     }
// }

// class car extends vehicle{
//     drive(){
//         return `${this.make} is an inheritance`;
//     }
// }



// let mycar = new car("BMW", "M5")
// console.log(mycar.start());
// console.log(mycar.drive());



//encapsulation restrict direct access to object data

// class BankAccount {
//     #balance=0; 
//     // # this variable will now not be visible to anyone if we want then we need to make custom method

//     deposit(amount){
//         this.#balance+=amount;
//         return this.#balance;
//     }

//     getBalance(){
//         return `$ ${this.#balance}`;
//     }
// }

// let acc=new BankAccount();
// console.log(acc.getBalance());


// //polymorphism 

// class bird{
//     fly(){
//         return `flying....`
//     }
// }

// class penguin extends bird{
//     fly(){
//         return`penguin can't fly`;
//     }
// }

// let Bird=new bird();
// let Penguin = new penguin();

// console.log(Bird.fly());
// console.log(Penguin.fly());



// static method



// class Calculator{


//     static add(a,b){
//         return a+b;
//     }
// }

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));


//this object cant access as it is static only class can access


// console.log(Calculator.add(2,4));

