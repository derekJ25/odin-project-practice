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
  let board = boardGrid;
  let gameCount = 1;
  let playerOne = createPlayer("player1", PLAYER_ONE_MARKER);
  let playerTwo = createPlayer("player2", PLAYER_TWO_MARKER);

  const startGame = () => {
    console.log(`Starting game ${gameCount}!`);
    displayBoard();
  };

  const displayBoard = () => {
    console.log("displaying board");
    console.log(board);
  };

  const saySomething = () => console.log("hi");

  return { board, gameCount, playerOne, playerTwo, startGame, saySomething };
})();

const Player = function (name, marker) {
  this.name = name;
  this.marker = marker;
};

function createPlayer(name, marker) {
  return { name, marker };
}

Game.startGame();
