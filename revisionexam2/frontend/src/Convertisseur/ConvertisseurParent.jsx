import React, { Component } from 'react'
import Valeur from './Valeur';

class ConvertisseurParent extends Component {

    constructor(){
        super();
        this.state = {
            m:0,
            km:0,
            cm:0
        }

    }

    handleChange = (typeMesure,valeur) =>{
        console.log(typeMesure)
        console.log(valeur)
        if (typeMesure === 'cm') {
            this.setState((prevState) => ({
                cm : valeur,
                m: valeur / 100,
                km: valeur / 100000,
            }));
        } else if (typeMesure === 'm') {
            this.setState((prevState) => ({
                m:valeur,
                cm: valeur * 100,
                km: valeur / 1000,
            }));
        } else if (typeMesure === 'km') {
            this.setState((prevState) => ({
                km:valeur,
                cm: valeur * 100000,
                m: valeur * 1000,
            }));
        }
    }


  render() {
    return (
      <>
        <Valeur mesure={"cm"}  functionRemonteEtat={this.handleChange} value={this.state.cm}/>
        <br></br>
        <Valeur mesure={"m"} functionRemonteEtat={this.handleChange} value={this.state.m}/>
        <br></br>
        <Valeur mesure={"km"} functionRemonteEtat={this.handleChange} value={this.state.km}/>
      </>
    )
  }
}

export default  ConvertisseurParent;
