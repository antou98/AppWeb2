const express = require('express')
const bodyParser = require('body-parser');
const app = express()

//res.send() is used to send the response to the client where res.end() is used to end the response you are sending.
app.get("/apiGet1",(req,res)=>{
    res.send("allo").end();
    //res.end("Hello")
});

app.get("/apiGet2",(req,res)=>{
    res.json({"val":"hello world"}).end()
    //res.end("Hello")
});

app.post("/apiPost",(req,res)=>{
    res.json({"val":"hello world"}).end();
})

app.listen(5000,()=>{
    console.log("server listening on port 5000")
});

//tous les requetes passe par ici
app.use((req,res)=>{
    console.log("à chaque appel use appelé");

    //appel la prochaine app.use
    next()

})