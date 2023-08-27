import React, {Component} from "react";
import './App.css';
class CalculeBase extends Component{

    constructor(){
        super();
        this.state={
            number1 : 0,
            number2 : 0,
            resultat : 0,
        }

        //bind pour utiliser
        this.somme = this.somme.bind(this);
        this.produit = this.produit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState(()=>({
            [name] : value,
        }));
    }

    somme(){
        this.setState(()=>({
            resultat : parseInt(this.state.number1) + (parseInt(this.state.number2)), 
        }));
    }

    produit(){
        this.setState(()=>({
            resultat : parseInt(this.state.number1) - (parseInt(this.state.number2)), 
        }));
    }

    render(){
        return( <div>
            <h1 style={{textAlign:'center'}} >CalculeBase</h1>
            <div id="calculeDeBase">
            <label>Nombre 1 : </label><input type="number" name="number1" value={this.state.number1} onChange={this.handleInputChange} ></input>
            <br></br>
            <label>Nombre 2 : </label><input type="number" name="number2" value={this.state.number2} onChange={this.handleInputChange} ></input>
            <br></br>
            <button onClick={this.somme}>Additionne</button>
            <br></br>
            <button onClick={this.produit}>Soustrait</button>
            <br></br>
            <label>Resultat : </label><label>{this.state.resultat}</label>
            </div>
            </div> );
    }

}

export default CalculeBase;