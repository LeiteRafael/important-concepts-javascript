const fs = require("fs");
var path = require('path');

const arq1 = path.join(__dirname,'files', '1.txt')
const arq2 = path.join(__dirname,'files', '2.txt')
const arq3 = path.join(__dirname,'files', '3.txt')

function myReadFile(file) {
  return new Promise((resolve) => {
    fs.readFile(file, "utf8", (err, data) => {
      resolve(data);
    });
  });
}

async function readAll() {

  const arquivo1 = await myReadFile(arq1);
  const arquivo2 = await myReadFile(arq2);
  const arquivo3 = await myReadFile(arq3);
  
  console.log(arquivo1, arquivo2, arquivo3);
}

readAll().then();