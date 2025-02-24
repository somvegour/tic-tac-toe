let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let  newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let  msg = document.querySelector("#msg");


let turn0=true //playerx,player0

const winpatterns=[
    [0, 1, 2],
    [0, 3 ,6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 6, 4],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) { 
            //playerO
        box.innerText= "O";
        turn0=false;
        }else{
             //playerx
            box.innerText="X ";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();

    });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};

 

const showWinner = (winner) => {
msg.innerText =`wow, apne  jit kar kiya uakhad liya,   ${winner}` ;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    for (let pattern of winpatterns) {

let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if( pos1val != "" && pos2val != "" && pos3val != ""){
    if( pos1val === pos2val && pos2val === pos3val){
        console.log("winner " ,pos1val); 
        showWinner(pos1val);
    }

}  
}
};

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);


const newLocal = (userChoice) => {
    //Generate computer choice
    const compChoice = compChoice();

    if (userChoice === compChoice) { }
};
const playGame = newLocal