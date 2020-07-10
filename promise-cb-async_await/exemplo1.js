const fs = require("fs");
var path = require('path');

const arq1 = path.join(__dirname,'files', '1.txt')
const arq2 = path.join(__dirname,'files', '2.txt')
const arq3 = path.join(__dirname,'files', '3.txt')

fs.readFile(arq1, "utf8", (err, data) => {
  console.log(data);
});

fs.readFile(arq2, "utf8", (err, data) => {
  console.log(data);
});

fs.readFile(arq3, "utf8", (err, data) => {
  console.log(data);
});
