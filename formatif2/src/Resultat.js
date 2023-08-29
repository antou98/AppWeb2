import React, {Component} from "react";
import './App.css';
import Calcule from './Calcule';
class Resultat extends Component{

    constructor(props){
        super(props);
        this.state={
            resultat : 0,
            num1 : 0,
            num2 : 0,
        }
        this.renderFromChild = this.renderFromChild.bind(this);
        this.renderValueFromChild = this.renderValueFromChild.bind(this);

    }

    //pour passer au parent
    renderFromChild(resultatValue){
        this.setState({
            resultat : resultatValue, 
        });
    }
    //pour passer numbers
    renderValueFromChild(val1){
        this.setState({
            num1 : val1, 
        });
    }

    render(){
        console.log(this.props)

        return(
        <div id="parentCal">
            <Calcule onClickCalcule={this.renderFromChild} res={"allo"} onClickPassData={this.renderValueFromChild}/>
            <label>Resultat : </label><label>{this.state.resultat}</label>
            <br></br>
            <label>Nombre 1 : </label><label>{this.state.num1}</label>
        </div>
        );

    }
}

export default Resultat;