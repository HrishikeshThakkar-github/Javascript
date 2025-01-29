console.log("hello world");
console.table({city:"jaipur"});


// datatypes

// String
// Number
// Boolean
// BigInt
//date
// undefined
// null

// Object
// Symbol -unique 



// var score = 100

let score =102;

let name="Hello";

let isloogedin = false


// object
let Teatype = ["lemon tea","green tea","oolong tea","kadak tea"]

let user={firstname:"Hrishi",lastname:"Thakkar"}


let getscore = score;

// we just need to use let while we define the variable then we can use it without that we cannot use let second time on the same variable name

getscore = 500;

console.log(getscore)



// const used to reserve memory in memory space similar to let
// nut the difference is that we can not change it

let sal=100
let bonus=25

let total=sal+bonus

console.log(total)

let expo=2**2
console.log(expo)


isloogedin =true
ispaid=false

console.log(isloogedin && ispaid)



let balance=120;
let newbalance= new Number(200);


//primitive and non primitive

//thus in javasript everything is an object
console.log(balance);
console.log(newbalance);
console.log(typeof balance);
console.log(typeof newbalance);


//null and undefinied

let abc;
console.log(abc);

let def=null; 
console.log(def);

//string

let a = "hello";
let b="world";

console.log(`${a} ${b} string interpolation!` );
//this signifies that this does the computation whether it is values or fetching variable values
let demoone=`value is ${2*2}`;
console.log(demoone);

let sm1=Symbol();
let sm2=Symbol();

console.group(sm1 == sm2);


//the symbol is basically used to define a unique value even if we have same value in symbol it will give out false because the basic usage of symbol is to represent a unique value



//objects
const username ={
    firstname:"Hrishi",
    isloogedin: true,
};


username.firstname="abc";
username.lastname="thakkar "
//this tells us that the username has a constant memoryreference but the values in there are mutable also we can add new values and can also remove it
console.log(username.firstname);
//another way 
console.log(username["firstname"]);
console.log(username.lastname);
console.log(username);

//there are also many types of inbulit objects like date 


//arrays
let arr1 =["hello", true];

console.log(arr1[1]);

//type conversion

//dont go with implicit type conversion