import React, {Component} from "react";
import './App.css';
class CalculeBase extends Component{

    constructor(props){
        super(props);
        this.state={
            number1 : 0,
            number2 : 0,
            resultat : 0,
        }

        //bind pour utiliser
        this.somme = this.somme.bind(this);
        this.produit = this.produit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendToParentResult = this.sendToParentResult.bind(this);
        this.sendValueToParent = this.sendValueToParent.bind(this);
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState(()=>({
            [name] : value,
        }));
    }

    //pour passer au parent
    sendToParentResult(){
        this.props.onClickCalcule(this.state.resultat);
    }

    sendValueToParent(){
        this.props.onClickPassData(this.state.number1);
    }

    somme(){
        this.setState(()=>({
            resultat : parseInt(this.state.number1) + (parseInt(this.state.number2)), 
        }));
        this.sendToParentResult();
        this.sendValueToParent();
    }

    
    produit(){
        this.setState(()=>({
            resultat : parseInt(this.state.number1) - (parseInt(this.state.number2)), 
        }));
        this.sendValueToParent();
        this.sendToParentResult();
    }
    
    //<label>Resultat : </label><label>{this.state.resultat}</label>
    render(){
        console.log(this.props)

        return( <div >
            <h1 style={{textAlign:'center'}} >CalculeBase</h1>
            <div >
            <label>Nombre 1 : </label><input type="number" name="number1" value={this.state.number1} onChange={this.handleInputChange} ></input>
            <br></br>
            <label>Nombre 2 : </label><input type="number" name="number2" value={this.state.number2} onChange={this.handleInputChange} ></input>
            <br></br>
            <button onClick={this.somme}>Additionne</button>
            <br></br>
            <button onClick={this.produit}>Soustrait</button>
            <br></br>
            <p>{this.props.res}</p>
            </div>
            </div> );
    }

}

export default CalculeBase;