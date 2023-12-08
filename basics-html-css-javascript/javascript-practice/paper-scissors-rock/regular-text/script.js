const playableChoices = ["paper", "scissors", "rock"];
const max = playableChoices.length;
const min = 0;

let GAME_ROUNDS = 5;
let userWins = 0;
let cpuWins = 0;
let draws = 0;

let getComputerChoice = () => {
  return playableChoices[Math.floor(Math.random() * (max - min)) + min];
};

let playRound = (playerSelection, computerSelection) => {
  let gameOutcome = `It's a draw! Both played ${computerSelection}!`;
  if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    gameOutcome = `You win! ${playerSelection} beats ${computerSelection}!`;
    userWins++;
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    gameOutcome = `You lose! ${computerSelection} beats ${playerSelection}!`;
    cpuWins++;
  } else {
    draws++;
  }
  return gameOutcome;
};

let getPlayerChoice = () => {
  let playerChoice = prompt("Please enter choice: (scissors/paper/rock)");
  if (playerChoice == null) {
    getPlayerChoice();
  } else if (playableChoices.includes(playerChoice.toLowerCase())) {
    return playerChoice.toLowerCase();
  } else {
    getPlayerChoice();
  }
};

let playGame = () => {
  while (GAME_ROUNDS != 0) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    GAME_ROUNDS--;
  }
  console.log(`Final score: ${userWins}W ${cpuWins}L ${draws}D`);
};

playGame();
