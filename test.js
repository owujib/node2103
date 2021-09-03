const fs = require('fs');
const path = require('path');

let fileOne = path.join(__dirname, '/files/my.txt');
let fileTwo = path.join(__dirname, '/files/file2.txt');

//synchronous
// const dataOne = fs.readFileSync(fileOne, 'utf-8');
// const dataTwo = fs.writeFileSync(fileTwo, `my new data \n ${dataOne}`);
// const dataThree = fs.readFileSync(fileTwo, 'utf-8');

//asynchronous
// fs.readFile(fileOne, 'utf-8', (err, dataOne) => {
//   if (err) {
//     throw err;
//   }
//   fs.writeFile('./files/async.txt', dataOne, (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.readFile('./files/async.txt', 'utf-8', (err, dataTwo) => {
//       if (err) {
//         throw err;
//       }
//       console.log(dataTwo);

//       fs.readdir('./files', (err, files) => {
//         if (err) {
//           throw err;
//         }
//         console.log(files);
//       });
//     });
//   });
// });

// const readFilePromise = (file) => {
//   return new Promise();
// };
const readFilePromise = (file) =>
  new Promise((resolve, reject) => {
    return fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

const writeFilePromise = (pathToFile, dataToWrite) =>
  new Promise((resolve, reject) => {
    return fs.writeFile(pathToFile, dataToWrite, (err) => {
      if (err) reject(err);
      resolve('WRITE FILE SUCCESS');
    });
  });

//consume promise
// readFilePromise(fileOne)
//   .then((result1) =>
//     writeFilePromise(fileTwo, `New data from promise ${result1}`)
//   )
//   .then((result2) => readFilePromise(fileTwo))
//   .then((result3) => console.log(result3))
//   .catch((err) => console.log(err));

// async function fileProcess() {}
const fileProcess = async () => {
  try {
    let f1 = await readFilePromise(fileOne);
    let f2 = await writeFilePromise('./files/await.txt', f1);
    let f3 = await readFilePromise('./files/await.txt');
    console.log(f3);
  } catch (error) {
    console.log(error);
  }
};

fileProcess();
