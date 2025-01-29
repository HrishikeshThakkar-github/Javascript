// const body = document.body;
// const div= document.createElement("div");
// body.append(div)


//-------------------BOM------------------//

// console.log(window.innerWidth); // Width of the browser's viewport
// console.log(window.location.href); // Current URL


// // console.log(location.href); // Get current URL
// // location.href = "https://example.com"; // Redirect to a new page

// console.log(navigator.userAgent); // Info about the browser
// console.log(navigator.language); // Browser language



// console.log(document.firstChild);



//----DOM----//


// let hold=document.getElementById('changetext')


// document.getElementById('changetext').addEventListener("click", function (){
//     //console.log(this);
//     document.getElementById('change-paragraph').textContent="the paragraph is changed";    
// });

// //note: here arrow functions can not be used as it would reference this to window and not the current object 

// document.createElement("link")

/*
 function addeventlistener(){
    let count=0;
    document.getElementById('changetext').addEventListener("click", function xyz(){
        console.log("button clicked", ++count);
    });
 }

 addeventlistener();

 */

//event listeners are heavy and takes up memory and hence it needs to be freed up thus garbage collector is used


// asynchronous js

/*

 //example-1

console.log("start");


setTimeout(function abc(){
    console.log("call back")
},5000);

console.log("end");
*/



//example-2

// console.log("start");


// document.getElementById('changetext').addEventListener("click",function cb(){
//     console.log("call back");

// })
// console.log("end");

//here also first start and end will get executed and when button is clicked then call back is printed

//example-3

// console.log("start");

// setTimeout(function cbT(){
//     console.log("call back setTimeout")
// },5000);


// fetch("https://www.youtube.com/")
// .then(function cbF(){
//     console.log("call back fetch");

// })

// console.log("end");




//example-4 
//this example tells us that it is not necessary that perfectly after ----ms the call back will  get executed , the eventloop will wait untill call stack is empty and then it will take call back from callback queue to call stack and implementation is done this is why there is trustissue with setTimeout

// console.log("start");

// setTimeout(function cbT() {
//     console.log("call back setTimeout")
// }, 5000);

// console.log("while starts");


// let startdate = new Date().getTime();
// let enddate = startdate;

// while (enddate <= startdate + 10000) {
//     enddate = new Date().getTime();
// }

// console.log("end");


// .map .filter and .reduce


/*
//.map it is mainly used to map out each element of an array to transform it
const arr =[1,2,3,4];

function double(x){
    return x*2;
}

const output1 = arr.map(double);
//implementing using higher order function syntax

const output2 = arr.map(
    function triple(x){
        return x*3;
});

//arrow function
const output3 = arr.map((x)=>{
    return x.toString(2);
});


console.log(output1);
console.log(output2);
console.log(output3);

*/

/*

//.filter -- filter out values (filterd based upon a logic)

//filter odd values

const arr=[1,2,3,4,5];

function isOdd(x){
    return x%2;
}
const output1 = arr.filter(isOdd);

const output2 = arr.filter((x)=>x>4);

console.log(output1);
console.log(output2);

*/



/*
//.reduce ->
//          in reduce we have to take the whole array and then come out with a single vlaue 

 
//lets first do this without the use of reduce

const arr =[1,2,3,4,5]

//sum of all numbers of an array

function findsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
        sum=sum+arr[i]
    return sum;
}

console.log(findsum(arr));


// const output = arr.reduce(function(accumulated value , current value){

// },0);

const output = arr.reduce (function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);

const output1 = arr.reduce(function(max, curr){
    if(curr>max) max=curr;
    return max;
},0)

console.log(output1);


*/

//extra example of map, reduce and filter 


