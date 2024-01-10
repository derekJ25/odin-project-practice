// All objects have a prototype - inherits another object

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

// [Class].prototype allows every single class to be able to call the same function
Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

const player1 = new Player("steve", "X");
const player2 = new Player("bob", "O");

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"

console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // returns true

// Why use it?
// 1) saves memory as properties are defined resutling in more memory taken. Centralised allows to cut this off
// hence being able to save space for memory
// 2) Prototypal inheritance, as the object created inherits the [class].prototype object where the constructor
// is used, allowing it to use functions that are shared accross the object

// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
console.log(player1.valueOf()); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

// About object prototype
// 1) Every prototype object inherits Object.prototype by default
// 2) An object Object.getPrototypeOf() valuye can be only one unique prototype object

// Recomended method for prototypal inheritance
// Example
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const playerX = new Player("steve", "X");
const playerO = new Player("also steve", "O");

playerX.sayName(); // Hello, I'm steve!
playerO.sayName(); // Hello, I'm also steve!

playerX.getMarker(); // My marker is 'X'
playerO.getMarker(); // My marker is 'O'
