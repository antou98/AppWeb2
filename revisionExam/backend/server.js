//copier coller
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());

let userArray = [];


app.post("/apiPost",(req,res)=>{
    let valInput = req.body.text;
    let answer = "";
    if(containsNumbers(valInput)){
        answer = "contient des chiffres";
    }else{
        answer = "contient pas de chiffres"
    }
    res.send(answer).end();
});

app.post("/apiConnection",(req,res)=>{
   let usernameInput = req.body.usernameInput;
   let passwordInput = req.body.passwordInput;

    let response = false; 
    
    userArray.forEach(element => {
        if(element.username===usernameInput&&element.password===passwordInput){
            response = true;  
        }
    });

    res.json({"isValidUser":response}).end();
})


//http://localhost:5000
app.listen(5000,()=>{
    console.log("server listening on port 5000")
});

//vaide si le input contient des chiffres
function containsNumbers(str) {
    return /\d/.test(str);
}

const readJsonFile = () => {
    try {
      const data = fs.readFileSync("./users.json", 'utf8');
      userArray = JSON.parse(data);
    } catch (error) {
      console.error('Error reading JSON file:', error.message);
    }
  };

const writeJsonFile = (data) => {
    try {
      const jsonData = JSON.stringify(data, null, 2); // The third argument (2) specifies the number of spaces for indentation
      fs.writeFileSync("./users.json", jsonData, 'utf8');
      console.log('Data has been written to the JSON file.');
    } catch (error) {
      console.error('Error writing to JSON file:', error.message);
    }
};

//aller lire les utilisateurs dans le fichier json (users.json)
readJsonFile();
console.log("users and passwords in users.json  :  ")
console.log(userArray)
