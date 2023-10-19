// npm install express

//https://blog.logrocket.com/reading-writing-json-files-nodejs-complete-tutorial/

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
   fs.readFile(__dirname + "/" + "events.json", 'utf8', function (err, data) {
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
   // Charger le fichier JSON existant
   const fichierJSON = __dirname + "/" + "events.json"; // Remplacez par le chemin réel de votre fichier JSON

   fs.readFile(fichierJSON, 'utf8', (err, data) => {
      if (err) {
         console.error("Erreur de lecture du fichier JSON :", err);
         return;
      }

      // Analyser le contenu JSON en un objet JavaScript
      const evenements = JSON.parse(data);

      let cle
      let valeur
      const jsonObj = req.body;
   
      // Parcourir toutes les clés de l'objet
      for (const key in jsonObj) {
         if (jsonObj.hasOwnProperty(key)) {
            const value = jsonObj[key];
            cle = key
            valeur = value
                // Ajouter le nouvel événement à l'objet JavaScript
            evenements[cle] = valeur; // Utilisez un nom unique pour l'événement, par exemple "event5"
         }
      }
   
      // Convertir l'objet JavaScript mis à jour en format JSON
      const nouveauContenuJSON = JSON.stringify(evenements, null, 4);

      // Enregistrer le fichier JSON mis à jour
      fs.writeFile(fichierJSON, nouveauContenuJSON, 'utf8', (err) => {
         if (err) {
            console.error("Erreur d'écriture du fichier JSON :", err);
            return;
         }
         console.log("Nouvel événement ajouté avec succès !");
      });
   });


   res.status(200).end();
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})