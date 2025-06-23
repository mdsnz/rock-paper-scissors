let humanScore = 0;
let computerScore = 0;
let computerSelection;

function playGame() {
  renderChoices();

  const rockBtn = document.querySelector(".rockBtn");
  const paperBtn = document.querySelector(".paperBtn");
  const scissorBtn = document.querySelector(".scissorBtn");

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

const choiceContent = document.createElement("div");
const winOrLose = document.createElement("div");

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "ROCK") & (computerChoice === "SCISSOR") ||
    (humanChoice === "SCISSOR") & (computerChoice === "PAPER") ||
    (humanChoice === "PAPER") & (computerChoice === "ROCK")
  ) {
    humanScore++;
    choiceContent.innerHTML = ``;
    choiceContent.innerHTML = `Your choice: ${humanChoice} | Computer choice: ${computerChoice}`;
    renderPlacar();
    gameArea.appendChild(choiceContent);
  } else if (
    (humanChoice === "ROCK") & (computerChoice === "PAPER") ||
    (humanChoice === "SCISSOR") & (computerChoice === "ROCK") ||
    (humanChoice === "PAPER") & (computerChoice === "SCISSOR")
  ) {
    computerScore++;
    choiceContent.innerHTML = ``;
    choiceContent.innerHTML = `Your choice: ${humanChoice} | Computer choice: ${computerChoice}`;
    renderPlacar();
    gameArea.appendChild(choiceContent);
  } else if (
    (humanChoice === "ROCK") & (computerChoice === "ROCK") ||
    (humanChoice === "PAPER") & (computerChoice === "PAPER") ||
    (humanChoice === "SCISSOR") & (computerChoice === "SCISSOR")
  ) {
    choiceContent.innerHTML = ``;
    choiceContent.innerHTML = `Your choice: ${humanChoice} | Computer choice: ${computerChoice}`;
    renderPlacar();
    gameArea.appendChild(choiceContent);
  }

  if (humanScore === 5) {
    choiceContent.innerHTML = ``;
    gameArea.appendChild(choiceContent);
    winOrLose.innerHTML = `Você ganhou! Parabéns`;
    gameArea.appendChild(winOrLose);
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    choiceContent.innerHTML = ``;
    gameArea.appendChild(choiceContent);
    winOrLose.innerHTML = `Você perdeu para o computador! Patético.`;
    gameArea.appendChild(winOrLose);
    humanScore = 0;
    computerScore = 0;
  } else {
    winOrLose.innerHTML = ``;
    gameArea.appendChild(winOrLose);
  }
}

const gameArea = document.querySelector(".gameArea");

function renderChoices() {
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

let alreadyRender = false;
const placar = document.createElement("Div");

function renderPlacar() {
  if (alreadyRender) {
    placar.innerHTML = ``;
  }

  placar.innerHTML = `
    <div>
    Placar!! Você: ${humanScore} || Computador: ${computerScore}
    </div>
    `;
  gameArea.appendChild(placar);
  alreadyRender = true;
}

// selecionando botão start
const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  setTimeout(() => {
    playGame();
  }, 200); // using this setTimeout so the browser can render the DOM again and ocult the start button before the playGame function executes.
});
