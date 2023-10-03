import React,{useState} from "react";
import ResultatCalcule3 from "./ResultatCalcule3";

const Calcule3 = ()=>{


    let [res,setRes] = useState(0);

    return(
        <>
        <ResultatCalcule3 additionFunction={setRes}/>
        <p>res : {res}</p>
        </>
    )

}
export default Calcule3;