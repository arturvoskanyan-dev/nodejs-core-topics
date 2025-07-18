import path from "node:path"

// 1`

// function getFileInfo(str) {
//     return path.parse(str)
// }

// console.log(getFileInfo(import.meta.filename));


// 2`

// function getExtensionFromPath(folder, subfolder, filename) {
//     const fullPath = path.join(folder, subfolder, filename);
//     return path.extname(fullPath)
// }

// console.log(getExtensionFromPath("src", "utils", "helper.js"));


// 3`

// function isInFolder(folder, file) {
//     try {
//         const absoluteFolder = path.resolve(folder);
//         const absoluteFile = path.resolve(file);

//         const relativePath = path.relative(absoluteFolder, absoluteFile);

//         return !relativePath.startsWith("../") && !path.isAbsolute(relativePath)
//     } catch(err) {
//         return false
//     } 
// }

// console.log(isInFolder("/home/user/project/src", "/home/user/projet/src/utils/helper.js"));


// 5`

function getJsFiles(arr) {
    return arr.filter(p => path.extname(p) === ".js")
}

console.log(getJsFiles(["./src/index.js", "./src/style.css", "./lib/util.js"]));
