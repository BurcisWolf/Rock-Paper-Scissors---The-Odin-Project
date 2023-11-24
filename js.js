let computer = "";
let player = "scissors";

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
    computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);
    playerSelection = player;
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

playRound();