console.log("b starting");

exports.done = false;
const a = require("./a.js");

console.log(`a.done = ${a.done}`);

exports.done = true;
console.log("b done");
