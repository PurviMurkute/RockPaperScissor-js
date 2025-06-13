const hmoveContainer = document.querySelector("#human-move");
const cmoveContainer = document.querySelector("#computer-move");
const winningMsg = document.querySelector("#winning-msg");
const hScoreContainer = document.querySelector("#h-Score")
const cScoreContainer = document.querySelector("#c-Score")


function computerMove() {
  const moves = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function playMove(humanMove) {
  const computerTurn = computerMove();
  hmoveContainer.innerText = humanMove;
  cmoveContainer.innerText = computerTurn;
  console.log(computerTurn);

  if (humanMove === computerTurn) {
    winningMsg.innerText = "Draw";
  } else if (
    (humanMove === "rock" && computerTurn === "scissor") ||
    (humanMove === "scissor" && computerTurn === "paper") ||
    (humanMove === "paper" && computerTurn === "rock")
  ) {
    winningMsg.innerText = "You Win!";
    hScoreContainer.innerText = parseInt(hScoreContainer.innerText) + 1; 
  } else {
    winningMsg.innerText = "You Lose!";
    cScoreContainer.innerText = parseInt(cScoreContainer.innerText) + 1;
  }
}

function resetGame(){
    window.location.reload();
}
