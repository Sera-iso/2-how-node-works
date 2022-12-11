// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// It can be done either by saving the required export in a variable
// const calc2 = require("./test-module-2");
// console.log(calc2.multiply(2, 5));

// or by decostructuring the object
const { add, multiply } = require("./test-module-2");
console.log(multiply(2, 5));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();