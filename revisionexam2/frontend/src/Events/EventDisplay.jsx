import React, { Component } from 'react'
import Event from './Event';
import PropTypes from 'prop-types';

const webWorker = new Worker('../worker.js')

class EventDisplay extends Component {

    constructor(){
        super();
        this.state ={
            events : [],
            currentID : -1,
            messageServeur : "",
            workerInput : 0,
            workerOutput:0
        }
        this.modifCurrentEventWithId = this.modifCurrentEventWithId.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.saveAll = this.saveAll.bind(this)
    }

    //ajout du data au state
    componentDidMount(){
        let requestOptions={
            method : 'Get',
            headers : {'Content-Type': "application/json"}
            };

            fetch("/api3", requestOptions)
                .then((res) => {
                    //envoi le data en texte au prochain then
                  return res.text();
                })
                .then((data) => {
                 // on insere le data ici
                console.log(data)
                let dataJson =JSON.parse(data)
                this.setState(()=>({
                    events:dataJson
                }))
            })
    }

    //appelé de l'enfant Event
    modifCurrentEventWithId(id){
            this.setState(()=>({
                currentID:id
            }));
    }


    //pour changer le state d'un array
    changeEvent(keyObjEvent,dateVal,titleVal){
        //utiliser this.state.events et mappé les valeurs voulu
        const updatedEvents = this.state.events.map((event)=>{
            //map le new event 
            if(event.hasOwnProperty(keyObjEvent)){
                return {
                    [keyObjEvent]:{
                        title:titleVal,
                        date:dateVal
                    }
                }
            }
            //map l'ancien event
            else{
                return event;
            }
        });

        //set les events
        this.setState({
            events:updatedEvents
        })
    }

    saveAll(){  
        const requestBody = {
            method : 'Post',
            headers : {'Content-Type': "application/json"},
            body:JSON.stringify({
                "json":this.state.events
            },)
        };
        fetch("/api4",requestBody)
        .then((res)=>{
            return res.text()
        }
        ).then((data)=>{
            this.setState(()=>({
                messageServeur : data
            }))
        })
    }

    handleChangeWorkerinputValue = (event)=>{
        let value = event.target.value;

        this.setState({
            workerInput:value
        })
    }

    callWorker= ()=>{
        if(this.state.workerInput!==undefined){
            webWorker.postMessage(this.state.workerInput)
        }
    
        webWorker.onmessage = (dataReceived)=>{
            const { data, temps } = dataReceived.data;
            this.setState({
                workerOutput:data
            })
        }
    }

    render() {
        //ternaire
        return (
        <div>
            <h2>Map events (avec node.js server calls )</h2>
            <table style={{"border":"1px solid black", "borderCollapse": "collapse","borderSpacing": "0px","marginLeft":"50px","marginTop":"50px"}}>
                <tbody>{
                    this.state.events.map((eventData, index) => (
                        index == this.state.currentID ?
                        <Event key={index} data={eventData} id={index} idOfEventToModif={this.modifCurrentEventWithId} toModif={true} remonteLeState={this.changeEvent}/>
                        :<Event key={index} data={eventData} id={index} idOfEventToModif={this.modifCurrentEventWithId} toModif={false} />
                    ))
                    }
                </tbody>
            </table>
            <button onClick={this.saveAll}>Save all</button>
            <p style={{"fontWeight":"bold"}}>{this.state.messageServeur}</p>
            <br />
            <h2>web Worker (thread)</h2>
            <input type="number" onChange={this.handleChangeWorkerinputValue} value={this.state.workerValue} name='workerValue' />
            <button onClick={this.callWorker}>Call worker</button>
            <p>{this.state.workerOutput}</p>
        </div>);
    }
}

// PropTypes for EventDisplay component
EventDisplay.propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      })
    ),
    currentID: PropTypes.number,
};

export default EventDisplay;
