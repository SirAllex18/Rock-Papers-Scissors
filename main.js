let PlayerWins = 0;
let CalculatorWins = 0;
function getComputerChoice() {
let result = Math.floor(Math.random() * 3);
if (result == 0) {
    return "rock";
}       else if (result == 1) {
    return "paper";
}       else {
    return "scissors";
}
}

function playGame(player, calculator) {

if(player == calculator) {
    paragraph.textContent = "Its a tie!";

}      
else if(
    (player == "rock" && calculator == "scissors") ||
    (player == "paper" && calculator == "rock") ||
    (player == "scissors" && calculator == "paper")
) {
    paragraph.textContent = `You win! ${player} beats ${calculator}`;
    PlayerWins++;
   }
else{
    paragraph.textContent = `You lost! ${player} loses to ${calculator}`;
    CalculatorWins++;
   }

}

const rockBtn = document.getElementById("rockBtn").addEventListener("click", () => { 
    playGame("rock", getComputerChoice());
})
const paperBtn = document.getElementById("paperBtn").addEventListener("click", () => {
    playGame("paper", getComputerChoice());
})
const scissorsBtn = document.getElementById("scissorsBtn").addEventListener("click", () => {
    playGame("scissors", getComputerChoice());
})
const paragraph = document.getElementById("paragraph");


