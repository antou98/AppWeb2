import React,{useState} from "react";

const ResultatCalcule3 = (props)=>{
    let [number1,setNumber1] = useState(0)
    let [number2,setNumber2] = useState(0);

    //utilise le set de la méthode parent
    let calcule =()=>{
        props.additionFunction(parseFloat(number1)+parseFloat(number2))
    }

    let handleNumberChange = (event)=>{
        let value = event.target.value;
        let name = event.target.name;

        if(name==="input1"){
            setNumber1(value)
        }else {
            setNumber2(value)
        }
    }
    return(<>
        <input type={"number"} value={number1} name={"input1"} onChange={handleNumberChange}/>
        <input type={"number"} value={number2} name={"input2"} onChange={handleNumberChange}/>
        <button onClick={calcule}>Addition</button>
    </>)
}

export  default  ResultatCalcule3;