import React, { Component } from 'react';

class Calcul extends Component {
    
    state = {
        resultat: 0
    }

    handleAdd = (nb) => {
        this.setState((state) => ({
            resultat : state.resultat + nb
        }))
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleAdd(10)}>Additionner 10</button>
                <button onClick={()=>this.handleAdd(20)}>Additionner 20</button>
                <label>Résultat :  { this.state.resultat}</label>
            </div>
        );
    }
}

export default Calcul;