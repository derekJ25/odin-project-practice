// Create a simple character for a game
// Game character can have different classes hence different attributes but will have some similarities

// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

// // Create instance of Hero constructor
// let hero1 = new Hero("Bjorn", 1);
// console.log(hero1);

// console.log(Object.getPrototypeOf(hero1));

// console.log(hero1.greet());

// creating classes for the character as they have different abilities
// Essentially, similar to other programmign languages but instead of super contructor to call the main constructor
// we use [class].call() not super(name, level) <- example from like Java

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// NOTE: Make sure to link the classes first befoe adding any prototype methods.
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Adding attacks to the classes
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

// hero1 initialised with warriro class
// hero2 initialised with healer class

const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");

console.log(hero1);
console.log(hero2);

console.log(hero1.attack());

// This will throw an error as it is not automatically linkeed to the call to the chain constructor.
// requires Object.setPropertyOf() to linked Hero constructor to the classes such as Warriror and Healer constructors
//  NOTE: This needs to be added before adding any additional methods
console.log(hero1.greet());
