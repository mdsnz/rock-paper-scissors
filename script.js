function getComputerChoice() {
    let computerChoice;
    let token = Math.floor(Math.random() * 3);

    if (token === 0) {
        computerChoice = "rock";
    } else if (token === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    let validChoice = false;
    while (!validChoice) {
        humanChoice = prompt("rock, paper or scissor?");
        if (humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissor") {
            validChoice = true;
        } else {
            alert("Please, enter a valid value");
        }
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toUpperCase();
    computerChoice = getComputerChoice();
    let roundEnd = false;

    while (!roundEnd) {

        if (humanChoice === "ROCK" & computerChoice === "scissor") {
            console.log(`Your choice: Rock | Computer choice: Scissor`)
            console.log("You win! Rock beats Scissor!")
            humanScore =+ 1;
        } else if ( humanChoice === "ROCK" & computerChoice === "paper") {
            console.log(`Your choice: Rock | Computer choice: Paper`)
            console.log("You lose! Paper beats Rock!")
            computerScore =+ 1;
        } else if (humanChoice === "ROCK" & computerChoice === "rock") {
            console.log(`Your choice: Rock | Computer choice: Rock`)
            console.log("It's a tie! Try again")
            roundEnd = true;
        } else if (humanChoice === "SCISSOR" & computerChoice === "scissor") {
            console.log(`Your choice: Scissor | Computer choice: Scissor`)
            console.log("It's a tie! Try again")
            roundEnd = true;
        } else if (humanChoice === "SCISSOR" & computerChoice === "paper") {
            console.log(`Your choice: Scissor | Computer choice: Paper`)
            console.log("You win! Scissor beats Paper!")
            humanScore =+ 1;
        } else if (humanChoice === "SCISSOR" & computerChoice === "rock") {
            console.log(`Your choice: Scissor | Computer choice: Rock`)
            console.log("You lose! Rock beats Scissor!")
            computerScore =+ 1;
        }
    }

}

