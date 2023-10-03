import React, {useState} from "react";

const Addition = ()=>{
    let [number1, setNumber1] = useState(0);
    let handleClick = (event)=>{
        setNumber1(number1 +parseFloat(event.target.value))
    }

    return (<>
        <button value="10" onClick={handleClick}>Additionner10</button>
        <button value="20" onClick={handleClick}>Additionner20</button>
        <p>res : {number1}</p>
    </>);
}

export default Addition;