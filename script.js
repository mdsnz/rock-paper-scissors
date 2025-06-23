let humanScore = 0;
let computerScore = 0;
let computerSelection;

function playGame() {
  renderChoices();

  const rockBtn = document.querySelector('.rockBtn');
  const paperBtn = document.querySelector('.paperBtn');
  const scissorBtn = document.querySelector('.scissorBtn');

  let humanSelection;

  rockBtn.addEventListener("click", () => {
    humanSelection = "ROCK";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
  });
  paperBtn.addEventListener("click", () => {
    humanSelection = "PAPER";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
  });
  scissorBtn.addEventListener("click", () => {
    humanSeleciton = "SCISSOR";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
  });

}


function getComputerChoice() {
  let computerChoice;
  let token = Math.floor(Math.random() * 3);

  if (token === 0) {
    computerChoice = "ROCK";
  } else if (token === 1) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSOR";
  }

  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    
  if (
    (humanChoice === "ROCK") & (computerChoice === "SCISSOR") ||
    (humanChoice === "SCISSOR") & (computerChoice === "PAPER") ||
    (humanChoice === "PAPER") & (computerChoice === "ROCK")
  ) {
    humanScore++;
    console.log(
      `Your choice: ${humanChoice} | Computer choice: ${computerChoice}`
    );
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)
  } else if (
    (humanChoice === "ROCK") & (computerChoice === "PAPER") ||
    (humanChoice === "SCISSOR") & (computerChoice === "ROCK") ||
    (humanChoice === "PAPER") & (computerChoice === "SCISSOR")
  ) {
    computerScore++;
    console.log(
      `Your choice: ${humanChoice} | Computer choice: ${computerChoice}`
    );
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)
  } else if (
    (humanChoice === "ROCK") & (computerChoice === "ROCK") ||
    (humanChoice === "PAPER") & (computerChoice === "PAPER") ||
    (humanChoice === "SCISSOR") & (computerChoice === "SCISSOR")
  ) {
    console.log(
      `Your choice: ${humanChoice} | Computer choice: ${computerChoice}`
    );
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)
  }

  if (humanScore === 5) {
    console.log(`Você ganhou! Parabéns`)
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    console.log(`Você perdeu para o computador! Patético.`)
    humanScore = 0;
    computerScore = 0;
  }
}

function renderChoices() {
  const gameArea = document.querySelector(".gameArea");

  const choices = document.createElement("div");

  choices.innerHTML = `
  <h2>O jogo começou!</h2>
  <h2>Qual a sua escolha?</h2>
  </br>
  <button class="rockBtn">Rock</button>
  <button class="paperBtn">Paper</button>
  <button class="scissorBtn">Scissor</button>
  `;

  gameArea.appendChild(choices);
}



/*
1. Clica Start Game
2. Botão start game some
3. Aparece: Placar atual e Três botões para seleção 
4. Após a última seleção, três botões somem, aparece botão jogar novamente, placar final com resultado
*/

// selecionando botão start
const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  setTimeout(() => {
    playGame();
  }, 200); // using this setTimeout so the browser can render the DOM again and ocult the start button before the playGame function executes.
});
