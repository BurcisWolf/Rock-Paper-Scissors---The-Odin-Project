let computer = "";
let player = "";
let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        computer= "rock";
    } else if(num == 1){
        computer = "paper";
    } else {
        computer = "scissors";
    }
    return computer;
}

function playRound(playerSelection, computerSelection){
    /* if(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors"){
            console.log(playerSelection);
            computerScore = 0;
            playerScore = 0;
            console.log("Wrong input, You have to start all over again. Score reseted!");
        return
    } */
    console.log("Computer choice " + computerSelection + " || Players choice " + playerSelection);
    if(playerSelection == computerSelection){
        return console.log("You tied!");
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lost, " + computerSelection + " wraps " + playerSelection);
        computerScore++;
        return 
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You won, " + playerSelection + " beats " + computerSelection);
        playerScore++;
        return 
    }  else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lost, " + computerSelection + " beats " + playerSelection);
        computerScore++;
        return 
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You won, " + playerSelection + " cuts " + computerSelection);
        playerScore++;
        return 
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You won, " + playerSelection + " wraps " + computerSelection);
        playerScore++;
        return 
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lost, " + computerSelection + " cuts " + playerSelection);
        computerScore++;
        return 
    }
}

function game(){
    console.log("---- Game starts ----");
    for (i = 0; i < 5; i++) {
        let player = prompt("Rock / Paper / Scissors", "").toLowerCase();
        roundCounter++;
        console.log("**** Round number " + roundCounter + " ****");
        playRound(player, getComputerChoice());
        console.log("Score: Player " + playerScore + " || Computer " + computerScore);
    }
}

game();