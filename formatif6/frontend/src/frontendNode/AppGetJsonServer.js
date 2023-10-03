import React,{useState} from "react";

const AppGetJsonServer = () =>{

    let [dataJson , setDataJson] = useState();

    let callApi = () =>{
        let requestOptions={
            method : 'Post',
            headers : {'Content-Type': "application/json"},
            body:JSON.stringify({
                "title": "event POST",
                "date": "2020-12-01"
            },)
        };
        fetch("/apiPost",requestOptions).
        then(res =>{
            console.log(res)
            return res.json()
        }).then(dataJson =>{
            setDataJson(dataJson.val)
        })

        }

    return (<>
        <button onClick={callApi}>Call api</button>
        <p>Val post = {JSON.stringify(dataJson)}</p>

    </>)
};

export default AppGetJsonServer;

