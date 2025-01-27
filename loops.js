// //sum of 1 to 5
// let n=0;
// for(let i=1; i<=5;i++){
//     n=n+i;
// }
// console.log(n);
// let countdown = new Array;
// let i=5;
// while(i>=1){
//     countdown.push(i)
//     i--;
    
// }
// console.log(countdown);

// // let teacollection =[];
// // let tea;
// // do{
// //     tea = prompt(`Enter your favourite tea (type stop to finish)`);
// //     if(tea!=="stop"){teacollection.push(tea)}
// // }while(tea!=="stop")

// let total=[];
// i=1;
// do{
//     total.push(i);
//     i++;    
// }while(i<=3)

// console.log(total);

// let oldarr=[2,4,6];
// i=0;
// let newarr=[];
// for(i=0;i<oldarr.length;i++){
//     newarr[i]=oldarr[i]*2;
//     //can also use push
// }

// console.log(newarr);
// let teaarr=["green tea", "black tea", "chai", "oolong tea"];
// let newteaarr=[];
// i=0;

// for(i=0;i<teaarr.length;i++){
//     if(teaarr[i]==="chai"){ break;}
//     newteaarr[i]=teaarr[i];

// }

// console.log(`new-tea-array is ${newteaarr}`);
// console.log(newteaarr);


// let teaarr=["green tea", "black tea", "chai", "oolong tea"];
// let newteaarr=[];
// i=0;

// for(i=0;i<teaarr.length;i++){
//     if(teaarr[i]==="chai"){ continue;}
//     newteaarr.push(teaarr[i]);
    
// }

// console.log(`new-tea-array is ${newteaarr}`);
// console.log(newteaarr);



////--------------------for-in-----------------------/////


 let arr=["this", "is", "for", "in", "loop"];


 for(a in arr){
    process.stdout.write(arr[a] + " ");
 }