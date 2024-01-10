// Tic-Tac-Toe Game

// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

// In this example, Example 2 is better as you would have to repeatedly print out which player is which
// and what markers is whos, however in Example 2, you are able to access the player object which allows
// you to know who the player is and what marker they ahve hence it is better to use the object rather
// than variables

function printName(player) {
  console.log(player.name);
}
