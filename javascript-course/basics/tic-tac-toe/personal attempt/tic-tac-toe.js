const startGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-game");

const PLAYER_ONE_MARKER = "x";
const PLAYER_TWO_MARKER = "o";

const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let gameboardHTML = "";
    gameboard.forEach((cell, index) => {
      gameboardHTML += `<div class="square" id="square-${index}">${cell}</div>`;
    });
    document.querySelector(".gameboard").innerHTML = gameboardHTML;
  };

  return { render };
})();

const Game = (() => {
  let players = [];

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

    Gameboard.render();
  };

  return { start };
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
