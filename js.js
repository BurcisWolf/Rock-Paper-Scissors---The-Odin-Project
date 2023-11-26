let computer = "";
let player = "";
let computerScore = 0;
let playerScore = 0;

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
    console.log("Computer: " + computerSelection);
    console.log("Player: " + playerSelection);
    if(playerSelection == computerSelection){
        return console.log("You tied!");
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        return console.log("You lost, " + computerSelection + " wraps " + playerSelection);
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        return console.log("You won, " + playerSelection + " beats " + computerSelection);
    }  else if(playerSelection == "scissors" && computerSelection == "rock"){
        return console.log("You lost, " + computerSelection + " beats " + playerSelection);
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        return console.log("You won, " + playerSelection + " cuts " + computerSelection);
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return console.log("You won, " + playerSelection + " wraps " + computerSelection);
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        return console.log("You lost, " + computerSelection + " cuts " + playerSelection);
    }
}

function game(){
    console("---- Game starts ----");
    for (i = 0; i < 5; i++) {
        let player = prompt("Rock / Paper / Scissors", "").toLowerCase();
        console.log(player);
        playRound(player, getComputerChoice());
        console.log("Round : " +i);
    }
}

game();