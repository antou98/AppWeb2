const express = require('express')
const bodyParser = require('body-parser');
const app = express()

//nécessaire
app.use(express.json());

//res.send() is used to send the response to the client where res.end() is used to end the response you are sending.
app.get("/apiGet1",(req,res)=>{
    res.send("allo").end();
    //res.end("Hello")
});

app.get("/apiGet2",(req,res)=>{
    res.json({"val":"hello world"}).end()
    //res.end("Hello")
});

// ajouter pour voir body json app.use(express.json());
app.post("/apiPost",(req,res)=>{
    //const {username,password} = req.body;
    console.log(req.body)
    //console.log(username)
    //console.log(password)
    res.json({"val":"hello world"}).end();
})


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("server listening on port "+port)
});




//tous les requetes passe par ici
/*app.use((req,res,next)=>{
    console.log("à chaque appel use appelé");

    //appel la prochaine app.use
    next();

})

app.use((req,res,next)=>{
    console.log("à chaque appel use appelé aussi par la première");
    end();
    //appel la prochaine app.use
    

})*/