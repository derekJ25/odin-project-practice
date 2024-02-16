let gameboard = {};

const Player = function (name, marker) {
  this.name = name;
  this.marker = marker;
};

function createUser(name, marker) {
  const nextPlayerturn = () => console.log(`${name} has ended their turn.`);
  return { name, marker, nextPlayerturn };
}

const player1 = createUser("player1", "x");
player1.nextPlayerturn();
