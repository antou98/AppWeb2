// npm install express --save

var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.json());

var entiers = [3, 4, 5, 6, 7, 8, 9, 10];

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   console.log("");
   console.log("requete recu !!!")
   next(); // permet de renvoyer la réponse et ainsi appeller la fonction ici-bas 
});

app.get('/listEvents', function (req, res) {
   fs.readFile( __dirname + "/" + "events.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})

app.get('/entier', function (req, res) {
   console.log(req.query.indice)
   var entier = entiers[req.query.indice];
   console.log(entier)
   res.send('the number is ' + entier);
})

// POST method route
app.post('/addEvent', function (req, res) {
   console.log(req.body);
   res.status(200).end();
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})