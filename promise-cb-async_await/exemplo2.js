const fs = require("fs");
var path = require('path');

const arq1 = path.join(__dirname,'files', '1.txt')
const arq2 = path.join(__dirname,'files', '2.txt')
const arq3 = path.join(__dirname,'files', '3.txt')

//Callback Hell ou Hadouken
fs.readFile(arq1, "utf8", (err, data1) => {
  fs.readFile(arq2, "utf8", (err, data2) => {
    fs.readFile(arq3, "utf8", (err, data3) => {
      console.log(data1);
      console.log(data2);
      console.log(data3);
    });
  });
});
