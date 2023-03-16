
let rounds = 5;
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

function playGame() {
let playerSelection = "";
//let playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
let computerChoice = getComputerChoice();
if(document.querySelector('#rockBtn').clicked == true){
    playerSelection = "rock";
}
else if(document.getElementById('paperBtn').clicked == true){
    playerSelection = "paper";
}else{
    playerSelection = "scissors";
}

if (playerSelection == computerChoice) {
    console.log("It's a tie!");
    rounds = rounds + 1;
}      
else if (
    (playerSelection == "rock" && computerChoice == "scissors") ||
    (playerSelection == "paper" && computerChoice == "rock") ||
    (playerSelection == "scissors" && computerChoice == "paper")
) {
    console.log("You win! " + playerSelection + " beats " + computerChoice + ".");
    PlayerWins++;
   

}       else {
    console.log("You lose! " + computerChoice + " beats " + playerSelection + ".");
    CalculatorWins++;
   

}

}


const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener('click', () => { 
    playGame()
});

paperBtn.addEventListener('click', () => {
    playGame();
})

scissorsBtn.addEventListener('click', () => {
    playGame();
})
