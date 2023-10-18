import React,{useState} from 'react';
import PropTypes from 'prop-types';

function Event(props) {
    //pour aller chercher la clé spécifique
    let [eventData,setEventData] = useState(props.data);
    const objectKey = Object.keys(eventData)[0]

    let [id,setID] = useState(props.id);
  
    

    const modifier =()=>{
        props.idOfEventToModif(id)
    };



    let [title,setTitle] = useState(eventData[objectKey].title);
    let [date,setDate] = useState(eventData[objectKey].date);

    const clickModifier=()=>{
        props.remonteLeState(objectKey,date,title);
    }

    const handleChange = (event)=>{
        var value = event.target.value;
        var name = event.target.name
        if(name==="date"){
            setDate(value);
        }else if(name==="title"){
            setTitle(value);
        }
    }

    return (
    <>
        <tr >
            <td style={{"border":"1px solid black"}}>{title}</td>
            <td style={{"border":"1px solid black",}}>{date}</td>
            <td><button onClick={modifier}>Modifier</button></td>
            {
                props.toModif === true? 
                <>
                <input type='text' name="title"  value={title} onChange={handleChange}></input>
                <input type='text'  name="date"  value={date} onChange={handleChange}></input>
                <button onClick={clickModifier}>Update</button>
                </> 
                : null
            }
        </tr>
    </>
  )
}

Event.propTypes = {
    id:PropTypes.number.isRequired,
    data: PropTypes.object.isRequired
}

export default Event