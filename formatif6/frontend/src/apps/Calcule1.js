import React, {useState} from "react";

const Calcule1 = ()=>{

    let [number1,setNumber1] = useState(0)
    let [number2,setNumber2] = useState(0);
    let [res,setRes] = useState(0);



    let handleNumberChange = (event)=>{
        let value = event.target.value;
        let name = event.target.name;

        if(name==="input1"){
            setNumber1(value)
        }else {
            setNumber2(value)
        }
    }

    let addition = ()=>{
        setRes(parseFloat(number1)+parseFloat(number2));
    }

    return(<>
        <input type={"number"} value={number1} name={"input1"} onChange={handleNumberChange}/>
        <input type={"number"} value={number2} name={"input2"} onChange={handleNumberChange}/>
        <button onClick={addition}>Addition</button>
        <p>res : {res}</p>

    </>);
}
export default Calcule1;