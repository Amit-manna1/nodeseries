// Async vs Sync
const fs = require("fs");
//sync  
// const data =fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("After read");

//Async
fs.readFile("read.txt","utf-8",(err,data1)=>{
    console.log(data1);
});

console.log("After read"); 