

function getComputerChoice() {
    let computerChoice;
    let token = Math.floor(Math.random() * 3);

    if (token === 0) {
        computerChoice = "ROCK";
    } else if (token === 1) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSOR"
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("rock, paper or scissor?");
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound (humanChoice, computerChoice) {
    
        if (humanChoice === "ROCK" & computerChoice === "SCISSOR" ||
            humanChoice === "SCISSOR" & computerChoice === "PAPER" ||
            humanChoice === "PAPER" & computerChoice === "ROCK"
        ) {
            console.log(`Your choice: ${humanChoice} | Computer choice: ${computerChoice}`)
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore += 1;
        } else if ( humanChoice === "ROCK" & computerChoice === "PAPER" ||
                    humanChoice === "SCISSOR" & computerChoice === "ROCK" ||
                    humanChoice === "PAPER" & computerChoice === "SCISSOR"
        ) {
            console.log(`Your choice: ${humanChoice} | Computer choice: ${computerChoice}`)
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore += 1;
        } else if (humanChoice === "ROCK" & computerChoice === "ROCK" ||
                   humanChoice === "PAPER" & computerChoice === "PAPER" ||
                   humanChoice === "SCISSOR" & computerChoice === "SCISSOR"
        ) {
            console.log(`Your choice: ${humanChoice} | Computer choice: ${computerChoice}`)
            console.log(`It's a tie! Try again`)
        }  
    }
    
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toUpperCase();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }
    
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game! Congratulations!!")
    } else if (humanScore < computerScore) {
        console.log("You lose the game!! Better chance next time!!")
    } else {
        console.log("The game ends in a TIE!")
    }
}
