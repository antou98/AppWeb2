import React,{useState} from "react";
import LoginValidator from "./LoginValidator";

function App2(props) {

    const [responseServer,setResponseServer] = useState({})
    const [messageErr,setmessageErr] = useState("")

    const login = (username,password)=>{
        let requestOptions={
            method : 'Post',
            headers : {'Content-Type': "application/json"},
            body:JSON.stringify({
                "title": "event POST",
                "usernameInput": username,
                "passwordInput":password
            },)
            };
            fetch("/apiConnection",requestOptions).then((res)=>{
                return res.json()
            }).then((resJson)=>{
                setResponseServer(resJson)
            })
            console.log(responseServer)

            if(responseServer.isValidUser){
                setmessageErr("");
                console.log("succes");
                props.funcChangeView(true)

            }
            else{
                setmessageErr("cette combinaison de mot de passe et de username n'existe pas");
            }
    }

    return(
        <>
            <LoginValidator placeHolderUserName={"username here"} placeHolderPassWord={"password here"} funcLogin={login} />
            <p id="msgServeur">{messageErr}</p>
            
        </>
        
    )
}

export default App2;