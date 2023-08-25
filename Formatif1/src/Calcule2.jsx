import React, {Component} from "react";


class Calcule2 extends Component{

    constructor(){
    super();
    this.state = {
        nombre1 : 0,
        nombre2 : 0,
        resultat : 0,
    };
    this.handleInputChangeNombre = this.handleInputChangeNombre.bind(this);
    }

    somme = () =>{
        this.setState(()=>({
            resultat : parseInt(this.state.nombre1) + parseInt(this.state.nombre2),
          }));
    }

    //les deux marchent////

    handleInputChangeNombre(event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState(()=>({
            [name] : value,
        }));
    }

    /*handleInputChangeNombre= (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState(()=>({
            [name] : value,
        }));
    }*/
    //////////
    render(){
        return(<div>
            <h1>Calcule2</h1>
            <input
              type="number"
              name="nombre1"
              value={this.state.nombre1}
              onChange={this.handleInputChangeNombre}
            />
            <input
              type="number"
              name="nombre2"
              value={this.state.nombre2}
              onChange={this.handleInputChangeNombre}
            />
            <button onClick={this.somme}>Add</button>
            <p>{this.state.resultat}</p>
          </div>)
    }

}
export default Calcule2;