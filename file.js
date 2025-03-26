const { error, log } = require('console')
const fs =require('fs')

fs.writeFile('./paper.txt', "Hello Node",(err)=>{
    console.log("errror",err);
})