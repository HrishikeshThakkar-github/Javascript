let teaflavour = ["black-tea", "chai", "oolong tea", "Green tea"];

const firsttea = teaflavour[0];
console.log(firsttea);

teaflavour[1] = "jasmine tea";
console.log(teaflavour[1]);


let cities = ["mumbai", "banglore", "pune", "hyderabad"]

const favouritecity = cities[2]

cities.push("ahmedabad");
console.log(cities);


let lastcity = cities.pop();//pops out the last element
console.log(cities);
console.log(lastcity);


//softcopy
let techcities = cities;
console.log(techcities);

cities.pop();


//here what happens is that even the copy is affected as they reference to the same memory space so whenever the original or the copy make any changes then it gets done in thhe memry and hence in the main as well this is different when compared with a simple varible
console.log(cities);
console.log(techcities);


console.log("hard-copy");
console.log();


techcities = [...cities];
cities.pop();
console.log(cities);
console.log(techcities);


//merge arrays

listcities= cities.concat(techcities);
console.log(listcities);

let count=listcities.length;
console.log(count);


let ismumbaiexists=listcities.includes("mumbai");
console.log(ismumbaiexists);

