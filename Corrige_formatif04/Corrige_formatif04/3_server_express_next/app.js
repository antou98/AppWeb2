const express = require('express');

const app = express();

// Une application Express est fondamentalement une série de fonctions appelées middleware.
// Chaque élément de middleware reçoit les objets request et response , peut les lire, les analyser et les manipuler, le cas échéant. 
// Le middleware Express reçoit également la méthode next , qui permet à chaque middleware de passer l'exécution au middleware suivant.

// Donc l'Appel de la fonction next est essentiel pour aller au prochain use

// use recoit une fonction en parametre et elle sera appellé pour tous les requetes.
// plusieurs fonction use, elle seront exécuté une apres l'autre dans l'ordre d'écriture

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;