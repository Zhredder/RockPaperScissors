var humanScore = 0;
var computerScore = 0;


function getComputerChoice(){
    var word = Math.floor(Math.random() * 3);
    if(word == 1){
        return "rock";
    }
    else if (word == 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let input = prompt("Rock, paper, or scissors?");

    if (input.toLowerCase == "rock"){
        return "rock";
    }
    else if (input.toLowerCase == "paper"){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    humanInput = humanChoice.toLowerCase;
    computerInput = computerChoice.toLowerCase;

    if(humanChoice != computerChoice){
        if(humanChoice == "paper" && computerChoice == 'rock'){
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if(humanChoice == "paper" && computerChoice == 'scissors'){
            console.log("You Lose! Paper loses to scissors");
            computerScore++;
        }
        else if(humanChoice == "rock" && computerChoice == 'scissors'){
            console.log("You Win! rock beats scissors");
            humanScore++;
        }
        else if(humanChoice == "rock" && computerChoice == 'paper'){
            console.log("You Lose! rock loses to paper");
            computerScore++;
        }
        else if(humanChoice == "scissors" && computerChoice == 'rock'){
            console.log("You Lose! scissors loses to rock");
            computerScore++;
        }
        else if(humanChoice == "scissors" && computerChoice == 'paper'){
            console.log("You Win! scissors beats paper");
            humanScore++;
        }
        
    }
    else {
        console.log("Draw Game!")
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore){
        console.log("You win!");
    }
    else {
        console.log("You lose lmao noob")
    }
}

playGame();
