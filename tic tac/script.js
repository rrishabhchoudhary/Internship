// // let boxes = document.querySelectorAll(".box");
// // let resetBtn = document.querySelector('#reset-btn');

// // let turn0 = true;

// // const winPatterns=[
// //     [0,1,2],
// //     [0,3,6],
// //     [0,4,8],
// //     [1,4,7],
// //     [2,5,8],
// //     [2,4,5],
// //     [3,4,5],
// //     [6,7,8],
// // ];

// // const checkWinner=() =>{
// //     for (let pattern of winPatterns){
// //         let pos1Value=boxes[pattern[0]].innerHTML;
// //         console.log(pos1Value)
// //         let pos2Value=boxes[pattern[1]].innerHTML;
// //         let pos3Value=boxes[pattern[2]].innerHTML;

// //         if(pos1Value !=""&&pos2Value !=""&& pos3Value!=""){
// //             if(pos1Value===pos2Value===pos3Value){
// //                 console.log(`winner ${pos1Value}`)
// //             }
// //         }
// //     }
// // }

// // boxes.forEach((box)=>{
// //     box.addEventListener("click",()=>{
// //         console.log("box was clicked")
// //         if(turn0){
// //             box.innerHTML="x";
// //             turn0=false;
// //         }else{
// //             box.innerHTML="0";
// //             turn0=true;
// //         }
// //         box.disabled = true;
// //         checkWinner();
// //     })
    
// // });
    

// const employee={
//     taxRate(){
//         console.log("tax is 10%");
//     }
// };

// const employee2 = {
//     salary:4000,
//     name:"rish",
// };

// employee2.__proto__ = employee; 

class toyota{
    // console.log("welcome");
   // constructor1(){};
    constructor(price,milege){
        console.log("welcome to toyota!!")
        
        this.price=price;
        this.milege=milege;
    }
}
class lexuscar extends toyota{ 
    
    constructor(price,milege){
        super(price,milege);
        console.log("this is lexus")
    } 
}

let fortuner = new toyota("50L","10 KPL");
console.log(fortuner);
let innova = new toyota("30L","14 KPL");
console.log(innova);
let lexus = new lexuscar("60 L","8 KPL");
console.log(lexus)
