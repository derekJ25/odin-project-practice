// Source/Credit: https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm

// const Formatter = (function () {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//   // this is essentially a IIFE? instantly invoked function expression as it immidiently returns an object
//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     return text.toUpperCase();
//   };

//   // Without this return, the makeUppercase const cannot be used outside the scope, keeps variables private
//   return {
//     makeUppercase,
//   };
// })();

// console.log(Formatter.makeUppercase("hello"));

// Example with Arrays, Objects and Primatives
// const Formatter = (function () {
//   // let timesRun = 0;

//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const timesRun = [];

//   // const setTimesRun = () => {
//   //   log("Setting times run");
//   //   ++timesRun;
//   // };

//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     // setTimesRun();
//     timesRun.push(null);
//     return text.toUpperCase();
//   };

//   return {
//     makeUppercase,
//     timesRun,
//   };
// })();

// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.makeUppercase("tomek"));
// // Value can be changed as it can still be accessed outside of the scope, better to have variable to be private
// // Formatter.timesRun = 10;
// // console.log(Formatter.timesRun);
// console.log(Formatter.timesRun.length);

// Examples of declaring module dependancies
// Inject mock example, IIFE
const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Formatter = (function () {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    // document.querySelector(selector).innerHTML = message;
    if (!!doc && "querySelector" in doc) {
      doc.querySelector(selector).innerHTML = message;
    }
  };

  return {
    makeUppercase,
    writeToDOM,
  };
})(document || documentMock);

Formatter.writeToDOM("#target", "Hi there");
