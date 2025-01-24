function function_name(parameter){
    //console.log(`hello ${parameter}`);
    return `return ${parameter}`; 
}

let print=function_name("param-a");
console.log(print);

function orderTea(teaType){
   
    function confirmorder() {
        return `order confirmed` ;
    }
    return confirmorder();
}

let a=orderTea("abc")
console.log(a);


const calculatetotal = (price,quantity)=> price * quantity;

let total =calculatetotal(20,100)

console.log(total);


/////----------first-calss function----------//////
const makeTea=(colour)=> colour
function processToOrder(teafunction) {
    return teafunction("early grey");
}


let order = processToOrder(makeTea);
console.log(order);


function createteamaker(){
    return function returnedfun(teaType){
        return `making ${teaType}`
    }
}

// let teamaker= returnedfun("green tea");

let teamaker= createteamaker();
//now this variable holds a function

let result = teamaker("green tea");

console.log(result);
