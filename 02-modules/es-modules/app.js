import main, {add} from "./foo.js"
import {foo as a } from "./a.js"

// console.log(add(3));
// console.log(import.meta);

// main()

// console.log(import.meta.filename);

a().then((res) => console.log(res))

const path = import.meta.resolve("./a.js");
console.log(path);
