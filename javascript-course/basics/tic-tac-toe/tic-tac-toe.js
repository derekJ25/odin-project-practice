const playerOneNameInput = document.querySelector("#playerOneName");
const playerTwoNameInput = document.querySelector("#playerTwoName");
const startGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-game");
const validPlayerName = /^[a-zA-Z]+$/;

const PLAYER_ONE_MARKER = "x";
const PLAYER_TWO_MARKER = "o";

const boardGrid = (function () {
  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return gameboard;
})();

// Game logic
// Have variables for: Game count, player1 and player 2
//
// Start game
// Clear game
// Place marker
// Check if market can be placed
// Check if the game is won
// Display the board

const Game = (function () {
  let boardCount = 0;
  let board = boardGrid;
  let gameCount = 1;
  let playerOne = createPlayer(playerOneNameInput.value, PLAYER_ONE_MARKER);
  let playerTwo = createPlayer(playerTwoNameInput.value, PLAYER_TWO_MARKER);

  const startGame = () => {
    console.log(`Starting game ${gameCount}!`);
    console.log(`P1: ${playerOne.name} | marker: ${playerOne.marker}`);
    console.log(`P2: ${playerTwo.name} | marker: ${playerTwo.marker}`);
    showGameInfo();

    // while(!isGameFinished()){

    // }
  };

  const clearGame = () => {
    console.log("clearing board.");
    playerOne = "";
    playerTwo = "";
    board = boardGrid;
    boardCount = 0;
    gameCount = 1;
    showGameInfo();
  };

  const placeMarker = () => {
    console.log("placing marker");
  };

  const markerAllowed = () => {
    console.log("checking if marker can be placed");
  };

  const isGameFinished = () => {
    console.log("checks if game is finished");
    if (boardCount < 10 || checkIfWinner()) {
    } else if (boardCount == 9 && checkIfWinner() == "none") {
    }
  };

  const checkIfWinner = () => {
    // let winner = "none";
    // if(){
    //   winner = playerOne.name;
    // } else if(){
    //   winner = playerTwo.name;
    // }
    // return winner;
  };

  const showGameInfo = () => {
    console.log("-----------------------");
    console.log(`Player 1: ${playerOne.name}`);
    console.log(`Player 2: ${playerTwo.name}`);
    console.log(`Board: ${board}`);
    console.log(`Board count: ${boardCount}`);
    console.log(`Game count: ${gameCount}`);
    console.log("-----------------------");
  };

  return {
    startGame,
    clearGame,
  };
})();

const Player = function (name, marker) {
  this.name = name;
  this.marker = marker;
};

function createPlayer(name, marker) {
  return { name, marker };
}

const validPlayerNames = function () {
  if (
    validPlayerName.exec(playerOneNameInput.value) &&
    validPlayerName.exec(playerTwoNameInput.value)
  ) {
    Game.startGame();
  } else {
    // error message for valid name
    alert(
      "Please enter a valid player name. Cannot contain symbols, space or numbers."
    );
  }
};
