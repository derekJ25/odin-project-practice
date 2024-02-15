const Formatter = (function () {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  // this is essentially a IIFE? instantly invoked function expression as it immidiently returns an object
  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  // Without this return, the makeUppercase const cannot be used outside the scope, keeps variables private
  return {
    makeUppercase,
  };
})();

console.log(Formatter.makeUppercase("hello"));
