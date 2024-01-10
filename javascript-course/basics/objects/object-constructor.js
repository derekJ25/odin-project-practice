// Having the manually type out each Object is not efficient hence we have an object constructor

// Example
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

// This is much similar to other programming languages

// To call a constructor, use the new keyword - also similar to other programming languages
const player = new Player("steve", "X");
console.log(player.name); // 'steve'

// can have method within the object that can call it, for example in the Player constuctor,
// we can replace line 16 code and have a method that is part of the Player object and be
// called, allowing it to access the player object values and much cleaner code
