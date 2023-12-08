// Exercises found here
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics
const section = document.querySelector("section");

// // Exercise 1

// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log("Meow!");
//   },
// };

// const catName = cat["name"];
// cat.greeting();
// cat.color = "black";

// let para1 = document.createElement("p");
// let para2 = document.createElement("p");

// para1.textContent = `The cat's name is ${catName}.`;
// para2.textContent = `The cat's color is ${cat.color}.`;

// section.appendChild(para1);
// section.appendChild(para2);\

// // Exercise 2
// let bandInfo;

// const band = {
//   name: "band name",
//   nationality: "somewhere on earth",
//   genre: "some music genre",
//   members: 3,
//   formed: 3000,
//   split: false,
//   albums: [
//     { name: "album 1", released: 3001 },
//     { name: "album 2", released: 3001 },
//   ],
// };

// bandInfo = `${band.name} | ${band.nationality} | ${band.genre} | ${band.members} | ${band.formed} | ${band.split} | ${band.albums[0].name} |${band.albums[0].released}`;

// let para1 = document.createElement("p");
// para1.textContent = bandInfo;
// section.appendChild(para1);

// // Exercise 3
// const cat1 = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

// const cat2 = {
//   name: "pud",
//   breed: "Orange",
//   color: "orange",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

// cat1.greeting();
// cat2.greeting();

// // Exercise 4
// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

// const cat2 = {
//   name: "Elfie",
//   breed: "Aphrodite Giant",
//   color: "ginger",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}

const cat = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");

cat.greeting();
cat2.greeting();
