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

let playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
let computerChoice = getComputerChoice();

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
function Play5Rounds(){
for(i = 0; i < rounds; i++){
    playGame();
}
}

Play5Rounds();
console.log(`The final score is You ${PlayerWins} - ${CalculatorWins} Calculator`);
