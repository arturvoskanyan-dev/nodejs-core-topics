import path from "node:path"

// console.log(path.posix);

/* basename(path, suffix) */

// console.log(import.meta.filename);

// console.log(path.basename("/home/artur/lessons/backend/Node JS/03-path/app.js"));
// console.log(path.basename(import.meta.filename));

// console.log(path.basename("/home/artur/lessons/backend/Node JS/03-path/app.js", ".js"));


////////////////////////////////////////////////////////////////////////////////////////////////////

/* delimiter, sep */

// console.log(path.delimiter); // Linux/Mac ":" | Windows ";"

// const PATH = process.env.PATH;
// const folders = PATH.split(path.delimiter)

// console.log(folders);


// console.log(path.sep); // Linux/Mac "/" | Windows "\"

// const fullPath = ["users", "joe", "docs"].join(path.sep); // cross-platform

// console.log(fullPath); // Linux/Mac => users/joe/docs | Windows => users\joe\docs

// console.log(path.dirname(import.meta.dirname));

////////////////////////////////////////////////////////////////////////////////////////////////////

/* extname */


// console.log(path.extname("index.html")); // ".html"
// console.log(path.extname("user.png")); // ".png"
// console.log(path.extname(".index")); // ""


// const file = "data.json";

// if(path.extname(file) === ".json") {
//     console.log("JSON file");   
// } else {
//     console.log("Not JSON");
// }


////////////////////////////////////////////////////////////////////////////////////////////////////

/* format(obj, parse) */

// const obj = {
//     root: "/home",
//     dir: "/users/artur/docs",
//     base: "file.txt"
// }

// const fullPath = path.format(obj);
// console.log(fullPath);

// const parsed = path.parse(import.meta.filename);
// console.log(parsed);



////////////////////////////////////////////////////////////////////////////////////////////////////

/* matchesGlob(path, pattern), isAbsolute(path) */

// console.log(path.matchesGlob("/home/artur", "/home/*"));
// console.log(path.matchesGlob("/home/artur", "/home/artur"));


// Linux/Mac / 
// console.log(path.isAbsolute(import.meta.filename)); // true
// console.log(path.isAbsolute("/foo/.")); // true
// console.log(path.isAbsolute("bar/")); // false


////////////////////////////////////////////////////////////////////////////////////////////////////

/* join([...paths]), resolve => absolute path */

// const fullPath = path.join("/home", "artur", "docs", "index.html");
// console.log(fullPath);

// const result = path.resolve("folder", "file.txt");
// const result2 = path.resolve("redux", "lesson1", "my-app")

// console.log(result);
// console.log(result2);


////////////////////////////////////////////////////////////////////////////////////////////////////

/* relative(from, to) */


const from = "/home/artur/docs";
const to = "/home/artur/images/photo.jpg";

const relativePath = path.relative(from, to);

console.log(relativePath);

