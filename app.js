let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let winMsg = document.querySelector("#win-msg");
let msgContainer = document.querySelector(".msg-container")

let turn = 1;

const winPattern = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

const resetGame = () => {
    turn = 1;
    enableBtn();
    msgContainer.classList.add("hide");
}

const disableBtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn === 1){
            box.innerText = "X"
        } else{
            box.innerText = "O"
        }
        turn = 1 - turn;
        box.disabled = true;
        checkWin();
    });
});

const showWinner = (winner) => {
    winMsg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWin = () => {
    for(let pattern of winPattern){;
        let box1 = boxes[pattern[0]].textContent;
        let box2 = boxes[pattern[1]].textContent;
        let box3 = boxes[pattern[2]].textContent;

        if(box1 !== "" && box2 !== "" && box3 !== ""){
            if(box1 === box2 && box2 === box3){
                showWinner(box1);
                disableBtn();
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
