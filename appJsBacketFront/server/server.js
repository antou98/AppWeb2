const express = require('express')


const userArray = { "users":[{"username":'DickClub',"password":"123"},{"username":'gino',"password":"abc"},{"username":'gio',"password":"321"}],"admins":[{"username":"dickbitch","password":"cock"}]}
const app = express()
// page /api
app.get("/api",(req,res)=>{
    res.json(userArray)
});

app.get("/api2",(req,res)=>{
    res.end("Hello")
});

app.get("/api3",(req,res)=>{
    res.end("Hello2")
});
//http://localhost:5000
app.listen(5000,()=>{
    console.log("server listening on port 5000")
});