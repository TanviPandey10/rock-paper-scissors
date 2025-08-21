let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const statusDisplay = document.getElementById("status");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function displayResult(winner, playerChoice, computerChoice) {
  if (winner === "draw") {
    statusDisplay.textContent = "It's a draw!";
    statusDisplay.style.background = "#081b31";
  } else if (winner === "player") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    statusDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    statusDisplay.style.background = "green";
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    statusDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    statusDisplay.style.background = "red";
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    displayResult("draw", playerChoice, computerChoice);
  } else {
    let playerWins = false;
    if (playerChoice === "rock" && computerChoice === "scissors") playerWins = true;
    if (playerChoice === "paper" && computerChoice === "rock") playerWins = true;
    if (playerChoice === "scissors" && computerChoice === "paper") playerWins = true;

    displayResult(playerWins ? "player" : "computer", playerChoice, computerChoice);
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", () => playGame(choice.id));
});
 
