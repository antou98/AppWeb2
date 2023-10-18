import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import DataInput from './DataInput';

function App() {

  const [result,setResult] = useState("");
  const [input,setInput] = useState("");

  //call api validateur de texte
  let callApi = ()=>{
    let requestOptions={
      method : 'Post',
      headers : {'Content-Type': "application/json"},
      body:JSON.stringify({
          "title": "event POST",
          "text": input
      },)
      };
      //valide server side si texte contient des chiffres (serveur retourne du texte : res.text())
      fetch("/apiPost",requestOptions).then((res)=>{
          return res.text()
      }).then((restxt)=>{
        setResult(restxt);
      });
  }

  return (
    <div className="App">
      <h1>Entrer un mot de passe valide</h1>
      <DataInput setParentValFunc={setInput} />
      <button onClick={callApi}>Valider</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
