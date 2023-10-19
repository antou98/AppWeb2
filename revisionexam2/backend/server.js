var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
//app.use(express.json());
app.use(bodyParser.json());



app.post("/api1",(req,res)=>{
    //console.log(req.body);
    const val = req.body.data;
    console.log(val);

    var eventArray = [];

    const path = __dirname+"/" + "data.json";
    fs.readFile(path,'utf8', (err, data) =>{
        //valide les erreurs
        if(err){
            console.log("erreur lors de la lecture du fichier data.json")
            
            res.send(message).end();

        }
        //creation d'un nouvel event selon les paramètres de l'utilisateurs
        else{
            
            ////Pour créer une clé qui existe pas ///////////////////
            eventArray = JSON.parse(data);

            //nouvelle clé
            let newEventKey = '';

            //valide que la clé n'existe pas 
            let keyExists = true
            let val = 0;

            while(keyExists){
                newEventKey = "event"+((eventArray.length)+1+val);

                //mettre à false 
                keyExists = false;

                for(let event of eventArray){
                    console.log(event);
                    if(event.hasOwnProperty(newEventKey)){
                        //remet à true si existe
                        keyExists =true;
                    }
                }

                val++;
            }
            console.log(newEventKey)
            /////////////////////////////////////////////////


            let jsonObjectToSave = {};

            //comment vérifier les null js
            if(req.body.title != null && req.body.date != null){
                console.log("writing to data.json")

                //bonne facon d'écrire un obj json
                jsonObjectToSave= {[newEventKey]:{"title": req.body.title,"date": req.body.date}};
                eventArray.push(jsonObjectToSave);

                //écrire dans le fichier json
                fs.writeFile(path, JSON.stringify(eventArray), 'utf8', (err) => {
                    if (err) {
                       console.error("Erreur d'écriture du fichier JSON :", err);

                       res.send("Erreur d'écriture du fichier JSON :", err).end();
                    }
                    else{
                        console.log("Nouvel événement ajouté avec succès !");
                        res.send("Nouvel événement ajouté avec succès !").end();
                    }                   
                 });
            }
        }    
    })
});

//ajout event et sauvegarder dans le fichier data.json
app.post('/ajoutQuick',(req,res)=>{
    const path ="./" + "data.json";
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err){
            res.send("Erreur : "+ err).end();
        }

        if(req.body.title!=null&&req.body.date!=null){
            console.log(data)

            let eventArray = JSON.parse(data)

            let title = "event"+(eventArray.length+1)

            eventArray.push({[title]:{"title": req.body.title,"date": req.body.date}})

            fs.writeFile(path,JSON.stringify(eventArray),"utf-8",(err)=>{
                if(err){
                    res.send("Event not created").end();
                }
                else{
                    res.send("Event created").end();
                }
        
            })
        }
        else{
            res.send("Event not created").end();
        }
        
    })
})

//lit le data dans data.json et le retourne l'évenement qui est passé par res
app.post("/api2",(req,res)=>{
    const path ="./" + "data.json";
    fs.readFile(path, 'utf8', (err, data) =>{
        //seulement si err 
        if(err){
            console.log("file reader error : "+err);
            //cancel la fonction read file et retourne res.status(200).end();
            res.send("error reading data.json").end();
        }
        else{
            //lit le data avec les clés des objet json event1 ou event2 event.hasOwnProperty(req.body.key) avec le input
            var jsonObject = JSON.parse(data)
            let exists = false;
            let eventToSend = {};
            for(var event of jsonObject){
                console.log(event)
                
                //si l'event existe renvoie l'obj json
                if(event.hasOwnProperty(req.body.key)){
                    exists = true;
                    eventToSend = event;
                }
            }

            if(exists){
                res.send(eventToSend).end();
            }else{
                res.send("the requested event does not exist").end();
            }
        } 
    });
})


//retourne tous les events
app.get("/api3",(req,res)=>{
    const path ="./" + "data.json";
    console.log(req.body)
    fs.readFile(path,'utf8',(err,data)=>{
        if(err){
            console.log("error reading file data.json"+err)
            res.send("error reading file data.json"+err);
        }
        else{
            let eventArray = JSON.parse(data);
            res.json(eventArray).end();
        }
    })
})

//écrire les nouvelles modifs
app.post("/api4",(req,res)=>{
    const path = "./"+"data.json";
    console.log(req.body.json);

    //le data pour write doit etre en string
    fs.writeFile(path,JSON.stringify(req.body.json),'utf8', (err) => {
            if(err){
                console.log("error lors de l'écriture"+err)
                res.send("error lors de l'écriture").end();
            }
            else{
                console.log("data sauvegarder");
                res.send("data sauvegarder").end();
            }
    }) 
})

//retourne l'event selon le id event passé en param 
//url postman = http://localhost:5000/events/eventid (ex : http://localhost:5000/events/event1) (req.params.id)
app.get('/events/:id',(req,res)=>{
    const path = "./"+"data.json";
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err){
            console.log("Erreur : "+err);
            res.send("Erreur : "+err).end();
        }
        let eventsArray = JSON.parse(data);
        let retEvent = null;

      
        for(let event of eventsArray){
            //console.log(event)
            console.log(req.params.id)
            if(event.hasOwnProperty(req.params.id)) {
                    retEvent = event;
            }
        }

        if(retEvent!=null){
            res.json(retEvent).end();
        }else{
            res.send("Not an eventid").end();
        }

    })
})


/*var user = {
    "user4" : {
       "name" : "marc",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }*/ 

//ajoute user à UserObjects object json avec json objects (degueu)
app.post('/adduser', function (req, res) {
    console.log("add user")
    // First read existing users.
    fs.readFile( __dirname + "/" + "UserObjects.json", 'utf8', function (err, data) {
        
       dataNew = JSON.parse( data );
       console.log( data );
       const newUserId = "user"+ (Object.keys(dataNew).length + 1);
       //console.log(req.body.user)
       //console.log(newUserId)
       dataNew[newUserId] = req.body.user;
       console.log( dataNew );

       fs.writeFile(__dirname + "/" + "UserObjects.json",JSON.stringify(dataNew),'utf8',(err)=>{
        if(err){
            console.log("error lors de l'écriture"+err)
            res.send("error lors de l'écriture").end();
        }
        else{
            console.log("data sauvegarder");
            res.send("data sauvegarder").end();
        }
       })
    });
 })


 //returns all in data.json
 app.get("/arr",(req,res)=>{
    const path = "./"+"data.json";
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err){
            res.send("Internal server error : "+err).end();
        }
        else{
            res.send(JSON.parse(data)).end();
        }

    })
    
 })





var server = app.listen(5000,()=>{
    var host = server.address().address
    var port = server.address().port
   console.log("server ecoute http://%s:%s", host, port)
})

/* 

res.send() peut envoyer :  string res.send("message") , objet json res.send({some:"value"}), array json res.send([{some:"value"}])


*/

