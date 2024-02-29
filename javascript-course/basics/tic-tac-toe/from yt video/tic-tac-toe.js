// Credit to Dors Coding School - https://www.youtube.com/watch?v=kVE4xX-OkJo
// From learning and going through this video allowed me to have an understanding of IIFE module pattern and factory

const startGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-game");

const PLAYER_ONE_MARKER = "x";
const PLAYER_TWO_MARKER = "o";
const GAMEBOARD_SIZE = 9;
const GAMEBOARD_EMPTY = "";

const displayController = (() => {
  const renderMessage = (message) => {
    document.querySelector(".message").innerHTML = message;
  };

  return { renderMessage };
})();

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
    if (gameOver) {
      return;
    }
    let index = parseInt(event.target.id.split("-")[1]);

    if (Gameboard.getGameboard()[index] !== "") {
      return;
    }

    Gameboard.update(index, players[currentPlayerIndex].marker);

    if (
      checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].marker)
    ) {
      gameOver = true;
      displayController.renderMessage(
        `${players[currentPlayerIndex].name} wins!`
      );
    } else if (checkForTie(Gameboard.getGameboard())) {
      gameOver = true;
      displayController.renderMessage("It's a tie!");
    }
    currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0;
  };

  const restart = () => {
    for (let i = 0; i < GAMEBOARD_SIZE; i++) {
      Gameboard.update(i, GAMEBOARD_EMPTY);
    }
    Gameboard.render();
    gameOver = false;
    document.querySelector(".message").innerHTML = "";
  };

  return {
    start,
    handleClick,
    restart,
  };
})();

// 0|1|2
// 3|4|5
// 6|7|8

function checkForWin(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkForTie(board) {
  return board.every((cell) => cell != "");
}

startGameButton.addEventListener("click", () => {
  Game.start();
});

restartGameButton.addEventListener("click", () => {
  Game.restart();
});
