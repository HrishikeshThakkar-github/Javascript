let num1=12;
let num2=10;

if(num1>num2){
    console.log(`the number ${num1} is greater than ${num2}`);
}
else{
    console.log(`the number ${num2} is greater than ${num1}`);
}

let string1 ="abc";
let string2 ="abc";

if(string1 == string2){console.log("equal");
}
else{"not equal"}

if(typeof num1 === "number"){
    console.log("the typeof variables is number");
    
}
else{
    console.log("they typeof number is not number");
    
}

let isloggedin =true;

if(isloggedin){console.log("boolean is true");
}
else{
    console.log("boolean is false");
    
}


let arr1=[];

if(/*arr1[0]==undefined*/ arr1.length===0){
    console.log("array is empty");
} else { 
    console.log("array is not empty");
}