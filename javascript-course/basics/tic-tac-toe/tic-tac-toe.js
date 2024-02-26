// const playerOneNameInput = document.querySelector("#playerOneName");
// const playerTwoNameInput = document.querySelector("#playerTwoName");
const startGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-game");
// const validPlayerName = /^[a-zA-Z]+$/;

const PLAYER_ONE_MARKER = "x";
const PLAYER_TWO_MARKER = "o";

const Gameboard = (function () {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id=square-${index}>${square}</div>`;
    });
    document.querySelector(".gameboard").innerHTML = boardHTML;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", Game.handleClick);
    });
  };

  const update = (index, marker) => {
    gameboard[index] = marker;
    render();
  };

  const getGameboard = () => gameboard;

  return { render, update, getGameboard };
})();

const createPlayer = (name, marker) => {
  return {
    name,
    marker,
  };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(
        document.querySelector("#playerOneName").value,
        PLAYER_ONE_MARKER
      ),
      createPlayer(
        document.querySelector("#playerTwoName").value,
        PLAYER_TWO_MARKER
      ),
    ];

    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);

    if (Gameboard.getGameboard()[index] !== "") {
      return;
    }

    Gameboard.update(index, players[currentPlayerIndex].marker);
    currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0;
  };

  return {
    start,
    handleClick,
  };
})();

startGameButton.addEventListener("click", () => {
  Game.start();
});

// // Game logic
// // Have variables for: Game count, player1 and player 2
// //
// // Start game
// // Clear game
// // Place marker
// // Check if market can be placed
// // Check if the game is won
// // Display the board

// const Game = (function () {
//   let boardCount = 0;
//   let board = boardGrid;
//   let gameCount = 1;
//   let playerOne = null;
//   let playerTwo = null;

//   const startGame = () => {
//     console.log(`Starting game ${gameCount}!`);
//     if (
//       (playerOne == null && playerTwo == null) ||
//       (playerOne.name == "" && playerTwo.name == "")
//     ) {
//       playerOne = createPlayer(playerOneNameInput.value, PLAYER_ONE_MARKER);
//       playerTwo = createPlayer(playerTwoNameInput.value, PLAYER_TWO_MARKER);
//     } else {
//       alert("There is already a game going on!");
//     }

//     showGameInfo();

//     // while(!isGameFinished()){

//     // }
//   };

//   const clearGame = () => {
//     console.log("clearing board.");
//     playerOne.name = "";
//     playerTwo.name = "";
//     board = boardGrid;
//     boardCount = 0;
//     gameCount = 1;
//     showGameInfo();
//   };

//   const placeMarker = () => {
//     console.log("placing marker");
//   };

//   const markerAllowed = () => {
//     console.log("checking if marker can be placed");
//   };

//   const isGameFinished = () => {
//     console.log("checks if game is finished");
//     if (boardCount < 10 || checkIfWinner()) {
//     } else if (boardCount == 9 && checkIfWinner() == "none") {
//     }
//   };

//   const checkIfWinner = () => {
//     // let winner = "none";
//     // if(){
//     //   winner = playerOne.name;
//     // } else if(){
//     //   winner = playerTwo.name;
//     // }
//     // return winner;
//   };

//   const showGameInfo = () => {
//     console.log("-----------------------");
//     console.log(`P1: ${playerOne.name} | marker: ${playerOne.marker}`);
//     console.log(`P2: ${playerTwo.name} | marker: ${playerTwo.marker}`);
//     console.log(`Board: ${board}`);
//     console.log(`Board count: ${boardCount}`);
//     console.log(`Game count: ${gameCount}`);
//     console.log("-----------------------");
//   };

//   return {
//     startGame,
//     clearGame,
//   };
// })();

// const Player = function (name, marker) {
//   this.name = name;
//   this.marker = marker;
// };

// function createPlayer(name, marker) {
//   return { name, marker };
// }

// const validPlayerNames = function () {
//   if (
//     validPlayerName.exec(playerOneNameInput.value) &&
//     validPlayerName.exec(playerTwoNameInput.value)
//   ) {
//     Game.startGame();
//   } else {
//     // error message for valid name
//     alert(
//       "Please enter a valid player name. Cannot contain symbols, space or numbers."
//     );
//   }
// };
