let computer = "";
let player = "rock";

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
    console.log(computerSelection);
    playerSelection = player;
    console.log(playerSelection);
    if(playerSelection == computerSelection){
        return console.log("You tied! Both of you played " +computerSelection);
    }
}

playRound();