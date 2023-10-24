import React,{useState} from 'react'

function Valeur(props) {
    let [valeur,setValeur] = useState(props.value);
    let [typeMesure,setTypeMesure] = useState(props.mesure);

    
    
    const remonteEtat = (event)=>{
        setValeur(event.target.value);
        props.functionRemonteEtat(typeMesure,valeur)
    }

  return (
    <><label> {props.mesure} : </label>
    <input type='number' name="input" value={props.value} onChange={remonteEtat}></input></>
  )
}

export default Valeur