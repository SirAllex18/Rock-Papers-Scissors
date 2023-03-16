let PlayerWins = 0;
let CalculatorWins = 0;


function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        return "rock";
    }   
    else if (result == 1) {
        return "paper";
    }
   else {
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
     )  {
        paragraph.textContent = `You win! ${player} beats ${calculator}`;
        PlayerWins++;
        }
    else{
        paragraph.textContent = `You lost! ${player} loses to ${calculator}`;
        CalculatorWins++;

        }
        
    result.textContent = `The score is You ${PlayerWins} - ${CalculatorWins} Calculator`;
    
    if(CalculatorWins == 5){
        result.textContent = `The score is You ${PlayerWins} - ${CalculatorWins} Calculator`;
        alert("Bummer, you lost the game!");
        resetGame();
     
            
        }
    else if(PlayerWins == 5){
        result.textContent = `The score is You ${PlayerWins} - ${CalculatorWins} Calculator`;
        alert("Congratulations, you won!");
        return resetGame();
 
        }
}


function resetGame(){
    PlayerWins = 0;
    CalculatorWins = 0;
    paragraph.textContent = "So you want to go again!";
    result.textContent = "The score is:"
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

const result = document.getElementById("result");
