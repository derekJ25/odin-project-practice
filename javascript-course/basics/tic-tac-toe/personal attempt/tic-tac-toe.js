const startGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-game");

const PLAYER_ONE_MARKER = "x";
const PLAYER_TWO_MARKER = "o";
const EMPTY_CELL = "";
const GAMEBOARD_SIZE = 9;

const displayController = (() => {
  const renderMessage = (message) => {
    document.querySelector(".message").innerHTML = message;
  };

  return { renderMessage };
})();

const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let gameboardHTML = "";
    gameboard.forEach((cell, index) => {
      gameboardHTML += `<div class="square" id="square-${index}">${cell}</div>`;
    });
    document.querySelector(".gameboard").innerHTML = gameboardHTML;
    const cells = document.querySelectorAll(".square");
    cells.forEach((cell) => {
      cell.addEventListener("click", Game.handleClick);
    });
  };

  const getGameboard = () => gameboard;

  const updateCell = (index, marker) => {
    gameboard[index] = marker;
    render();
  };

  return { render, getGameboard, updateCell };
})();

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

  const restart = () => {
    for (let i = 0; i < GAMEBOARD_SIZE; i++) {
      Gameboard.updateCell(i, EMPTY_CELL);
    }
    currentPlayerIndex = 0;
    gameOver = false;
    displayController.renderMessage("");
  };

  const handleClick = (event) => {
    if (gameOver) {
      return;
    }

    let cellIndex = event.target.id.split("-")[1];

    if (Gameboard.getGameboard()[cellIndex] == "") {
      Gameboard.updateCell(cellIndex, players[currentPlayerIndex].marker);
    } else {
      return;
    }

    if (checkForWin(Gameboard.getGameboard())) {
      gameOver = true;
      displayController.renderMessage(
        `${players[currentPlayerIndex].name} wins!`
      );
    } else if (checkForTie(Gameboard.getGameboard())) {
      gameOver = true;
      displayController.renderMessage("Game is a tie!");
    }

    Gameboard.render();
    currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0;
  };

  return { start, restart, handleClick };
})();

const createPlayer = (name, marker) => {
  return { name, marker };
};

// 0|1|2
// 3|4|5
// 6|7|8

const checkForWin = (board) => {
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
};

const checkForTie = (board) => {
  return board.every((cell) => cell != "");
};

startGameButton.addEventListener("click", () => {
  Game.start();
});

restartGameButton.addEventListener("click", () => {
  Game.restart();
});
