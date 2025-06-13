const hmoveContainer = document.querySelector('#human-move')
const cmoveContainer = document.querySelector('#computer-move')

function cumputerMove(){
    const moves = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * moves.length) + 1;
    console.log(randomIndex);
    cmoveContainer.innerText = moves[randomIndex];
}

function playMove(move){
    hmoveContainer.innerText = move;
    cumputerMove()
}