const playableChoices = ["paper", "scissors", "rock"];
const max = playableChoices.length;
const min = 0;

const GAME_ROUNDS = 5;
let userWins = 0;
let cpuWins = 0;
let draws = 0;
let games = 0;

const playerOptions = document.querySelectorAll("button");
const score = document.querySelector("#scoreboard");
const roundResult = document.querySelector("#roundResult");

const getComputerChoice = () => {
  return playableChoices[Math.floor(Math.random() * (max - min)) + min];
};

const playRound = (userChoice) => {
  const cpuChoice = getComputerChoice();
  gameResult(userChoice, cpuChoice);
  updateScore();
  const winner = userWins > cpuWins ? "user" : "cpu";
  if (userWins === 5 || cpuWins === 5) {
    alert(`Winner is ${winner}!`);
  }
};

const gameResult = (userChoice, cpuChoice) => {
  let gameOutcome = `It's a draw! Both played ${userChoice}!`;
  if (
    (userChoice === "scissors" && cpuChoice === "paper") ||
    (userChoice === "paper" && cpuChoice === "rock") ||
    (userChoice === "rock" && cpuChoice === "scissors")
  ) {
    gameOutcome = `You win! ${userChoice} beats ${cpuChoice}!`;
    userWins++;
    displayRoundResult("user");
  } else if (
    (userChoice === "paper" && cpuChoice === "scissors") ||
    (userChoice === "rock" && cpuChoice === "paper") ||
    (userChoice === "scissors" && cpuChoice === "rock")
  ) {
    gameOutcome = `You lose! ${cpuChoice} beats ${userChoice}!`;
    cpuWins++;
    displayRoundResult("cpu");
  } else {
    draws++;
    displayRoundResult("tie");
  }
  games++;
  return gameOutcome;
};

playerOptions.forEach((button) => {
  button.addEventListener("click", () => {
    if (userWins < GAME_ROUNDS && cpuWins < GAME_ROUNDS) {
      playRound(button.id);
    }
  });
});

const updateScore = () => {
  score.textContent = `SCORE: ${games}G ${userWins}W ${cpuWins}L ${draws}D`;
};

const displayRoundResult = (result) => {
  if (result === "user") {
    roundResult.textContent = "User wins this round!";
  } else if (result === "cpu") {
    roundResult.textContent = "User loses this round!";
  } else {
    roundResult.textContent = "Round is a tie!";
  }
};
