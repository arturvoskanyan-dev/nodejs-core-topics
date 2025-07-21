// import fs from "node:fs"
import fs from "node:fs/promises"

/* readFile */

// 1. callback 

// fs.readFile("README.md", "utf8", (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
    
// })

// 2. async/await

// async function readFileAsync(file) {
//     try {
//         const data = await fs.readFile(file, "utf8");
//         console.log(data);
//     } catch(err) {
//         console.log(err);
//     }
// }

// readFileAsync("README.md")


//////////////////////////////////////////////////////////////////////////////////

/* writeFile */

// async function writeFileAsync() {
//     try {
//         await fs.writeFile("output.txt", "Hello Node JS", "utf8");
//         console.log("file hajoxutyamb stexcvec");
//     } catch(err) {
//         console.log(err);
//     }
// }

// writeFileAsync()


//////////////////////////////////////////////////////////////////////////////////

/* unlink jnjume file */

// async function deleteFile(file) {
//     try {
//         await fs.unlink(file);
//         console.log("File hajoxutyamb jnjvec");
//     } catch(err) {
//         console.log(err);
//     }
// }

// deleteFile("log.txt")


//////////////////////////////////////////////////////////////////////////////////


/* mkdir stexcum e folder */

async function createFolder(folderName) {
    try {
        // await fs.mkdir(folderName)
        await fs.mkdir(folderName, {recursive: true})
        console.log("Folder hajoxutyamb stexcvec");
    } catch(err) {
        console.log(err);
    }
}

// createFolder("log/a/b")

//////////////////////////////////////////////////////////////////////////////////

/* rmdir, rm {recursive: true} */

// async function deleteFolder(folderName) {
//     try {
//         await fs.rmdir(folderName)
//         console.log("Folder hajoxutyamb jnjvec");
//     } catch(err) {
//         console.log(err);
//     }
// }

// deleteFolder("a")

// async function deleteFolder(folderName) {
//     try {
//         await fs.rm(folderName, {recursive: true})
//         console.log("Folder hajoxutyamb jnjvec");   
//     } catch(err) {
//         console.log(err);
//     }
// }

// deleteFolder("log")


//////////////////////////////////////////////////////////////////////////////////

/* appendFile => file mej avelacnume tvyal isk ete ayd file chka stexcum e */

// async function appendFileAsync(path, data) {
//     try {
//         await fs.appendFile(path, data, "utf8");
//         console.log("Tvyal@ hajoxutyamb avelacvec");
//     } catch(err) {
//         console.log(err);   
//     }
// }

// // appendFileAsync("output.txt", "\nHow are you?");
// appendFileAsync("output.txt", "\n4 + 4 = ?");


//////////////////////////////////////////////////////////////////////////////////

/* readdir => talise file parunakutyun@ [] */

// async function readDirectory(folderName) {
//     try {
//         const files = await fs.readdir(folderName);
//         console.log(files);
//     } catch(err) {
//         console.log(err);
//     }
// }

// readDirectory("a")
// readDirectory("log")


//////////////////////////////////////////////////////////////////////////////////

/* stat */

// async function getFileStats(file) {
//     try {
//         const stats = await fs.stat(file);

//         console.log(stats.size);
//         console.log(stats.isDirectory());
//         console.log(stats.birthtime);
//         console.log(stats.mtime);

//     } catch(err) {
//         console.log(err);
//     }
// }

// getFileStats("log")


//////////////////////////////////////////////////////////////////////////////////

/* rename */

// async function renameFile(name, newName) {
//     try {
//         await fs.rename(name, newName)
//         console.log("Anun@ hajoxutyamb poxvec");   
//     } catch(err) {
//         console.log(err);
//     }
// }

// renameFile("output.txt", "new-name.txt")

// async function moveFile(fileName, newPath) {
//     try {
//         await fs.rename(fileName, newPath);
//         console.log("File hajoxutyamb texapoxvec");
//     } catch(err) {
//         console.log(err);
//     }
// }

// moveFile("new-name.txt", "./a/file.txt")


//////////////////////////////////////////////////////////////////////////////////

async function copy(file, copyFile) {
    try {
        await fs.copyFile(file, copyFile)
        console.log("File copy arvel e");
    } catch(err) {
        console.log(err);
    }
}

copy("data.json", "copy.json")

//////////////////////////////////////////////////////////////////////////////////

/* access */

/* 

constants. 

W => grel
F => stugel file ka
R => kareli e kardal

constants.R_OK | constants.W_OK => kareli e kardal ev grel

*/

async function checkAccess(fileName) {
    try {
        await fs.access(fileName, fs.constants.W_OK)
        console.log("Ka grelu iravunq");
    } catch(err) {
        console.log("Chka grelu iravunq kam file chka");
    }
}

// checkAccess("a.js")