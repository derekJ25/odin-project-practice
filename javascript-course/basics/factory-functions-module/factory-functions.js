// function createUser(name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }

// function createPlayer(name, level) {
//   const { getReputation, giveReputation } = createUser(name);

//   const increaseLevel = () => level++;
//   return { name, getReputation, giveReputation, increaseLevel };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation(),
// });
// // logs { discordName: "@josh", reputation: 2 }

// const player = createPlayer("player", 2);
// console.log(player);

// Calculator example
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

console.log(calculator.add(3, 5)); // 8
console.log(calculator.sub(6, 2)); // 4
console.log(calculator.mul(14, 5534)); // 77476
