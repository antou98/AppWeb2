var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());    // Mise en place du middleware de cookie
app.use(session({secret: "Shh, its a secret!"})); // Mise en place du middleware de session. Il gère tout pour nous
                                                  // soit la création de la session, la définition du cookie et la création de 
                                                  // l'objet de session dans l'objet req

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3001, () => {
    console.log("running server");
  });
  