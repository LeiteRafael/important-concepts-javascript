const fs = require("fs");
var path = require('path');

const arq1 = path.join(__dirname,'files', '1.txt')
const arq2 = path.join(__dirname,'files', '2.txt')
const arq3 = path.join(__dirname,'files', '3.txt')

function myReadFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      resolve(data);
    });
  });
}

myReadFile(arq1)
  .then((data) => {
    console.log(data);
    return myReadFile(arq2);
  })
  .then((data) => {
    console.log(data);
    return myReadFile(arq3);
  });