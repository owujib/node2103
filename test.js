// const path = require('path');
// const fs = require('fs'); //file system

// let fileOne = path.join(__dirname, 'views/index.html');
// // console.log(fileOne);

// //blocking model/synchronous way of reading files
// let dataOne = fs.readFileSync(fileOne, 'utf-8');
// console.log(dataOne);
// // synchronous way of writing to files
// // let dataTwo = fs.writeFileSync(
// //   path.join(__dirname, 'files/my.txt'),
// //   `my new data ${dataOne} 😊😊😊😊`
// // );
// // const {data, getAge} = require('./first')

// // data.map((el, id) =>{
// //     console.log({...el, id: id +1});
// //  })

// // let age = getAge(2000)

function a(...data) {
  console.log(data);
  console.log(data.includes('Deolu'));
}

a('Ekene', 'Davidson');
