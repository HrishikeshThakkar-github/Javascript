let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");

let turn0=true

const winpattern=[
    [0,1,2],
    [1,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box has been clicked");

        if(turn0){
            box.innerHTML="0"
            turn0=false;
        }else{
            box.innerHTML="X"
            turn0=true
        }
       box.disabled=true;

       checkWinner();
    }) 
})

const checkWinner = ()=>{
    for(let pattern of winpattern){
        
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                
            }
        }
    }
}