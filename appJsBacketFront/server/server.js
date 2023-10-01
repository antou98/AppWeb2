const express = require('express')
const bodyParser = require('body-parser');

const userArray = { "users":[{"username":'DickClub',"password":"123"},{"username":'gino',"password":"abc"},{"username":'gio',"password":"321"}],"admins":[{"username":"dickbitch","password":"cock"}]}
const app = express()
//pour passer du json à partir du client
 app.use(bodyParser.json());

// page /api pour passer data
//app.get("/api",(req,res)=>{
//    res.json(userArray)
//});

app.use(bodyParser.json());

//pour requete
app.post("/api",(req,res)=>{
    const {username,password} = req.body;
    console.log(username)
    console.log(password)
    let isAUser = false;
    //pour users
    userArray.users.forEach(element => {
        if(username === element.username && password === element.password){
            isAUser = true;
           
        }
    });

    //pour admins
    userArray.admins.forEach(element => {
        if(username === element.username && password === element.password){
            isAUser = true;
        }
    });

    res.json({"estUtilisateur":isAUser})
})

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

//