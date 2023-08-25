import React , {Component} from "react";
class Calcule1 extends Component{

    state = {
        nombre1 : 0,
        nombre2 : 0,
        resultat : 0,
    }

    handleInputChangeNombre = (event) =>{
        const value = event.target.value;
        const name = event.target.name;

        this.setState(()=>({
            [name] : value,
        }));
    }
    
    somme = () =>{
        this.setState(()=>({
            resultat : parseInt(this.state.nombre1) + parseInt(this.state.nombre2),
        }))
    }
    
    //name input doit être le même que les nom dans state
    render(){
        return (<div>
            <h1>Calcule1</h1>
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
            <p > resultat class : {this.state.resultat}</p>
        </div>);
    }
}
export default Calcule1;