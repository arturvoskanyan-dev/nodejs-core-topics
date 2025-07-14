// const math = require("./math.js");

// console.log(math.add(6, 7));
// console.log(math.obj.add(6, 7));
// console.log(math.obj.sum([1, 2, 3, 4, 5, 6, 7]));


// const Person = require("./person.js");
// const myPerson = new Person("Karen", 24);

// console.log(myPerson.sayHi());

//////////////////////////////////////////////////////////

// const x = require("./foo.js");

// console.log(x.__esModule);


// const sayHi = require("./foo.js").sayHi; // export 
// const Point = require("./foo.js").default; // export default
// const myPoint = new Point(2, 4);

// console.log(sayHi("Ashot"));
// console.log(myPoint);

// const a = require("./foo.js").foo; // async function
// console.log(a);


//////////////////////////////////////////////////////////

const math = require("./math.js");
const fullPath = require.resolve("./math.js");

// console.log(require.cache);
// console.log(fullPath);
// console.log(__filename);

delete require.cache[require.resolve("./math.js")];

// console.log(require.cache);


try {
    const path = require.resolve("./s.js");
} catch(err) {
    console.log("ayd modul@ goyutyun chuni");
}