const startGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-game");

const PLAYER_ONE_MARKER = "x";
const PLAYER_TWO_MARKER = "o";
const EMPTY_CELL = "";
const GAMEBOARD_SIZE = 9;

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
  };

  const handleClick = (event) => {
    let cellIndex = event.target.id.split("-")[1];

    Gameboard.getGameboard()[cellIndex] = players[currentPlayerIndex].marker;
    Gameboard.render();
    currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0;
  };

  return { start, restart, handleClick };
})();

const createPlayer = (name, marker) => {
  return { name, marker };
};

startGameButton.addEventListener("click", () => {
  Game.start();
});

restartGameButton.addEventListener("click", () => {
  Game.restart();
});
