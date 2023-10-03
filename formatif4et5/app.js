const express = require('express');
//var fs = require("fs");
//var data = fs.readFileSync('input.txt');
//https://localhost:3000/
const app = express()


app.get('/page',function(req,res){
    data = {
        brains: "squishy",
        relationships: "squishy",
        tickles: "harsh",
        taste: "sweet"
    }

    console.log(data.brains);
});

/*app.use((req,res)=>{
    console.log(req.method)
    res.json({message:"message"});
});*/


module.exports = app;