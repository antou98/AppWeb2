import React, { Component } from 'react';
import Saisi from './Saisi';

class Resultat extends Component {

    state = {
        resultat: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAdd = (nombre1, nombre2) => {
        console.log("from children")
        this.setState({ resultat: Number(nombre1) + Number(nombre2) });
    }

    render() {
        return (
            <div>
                <Saisi fonctionaddFromChildren={this.handleAdd}></Saisi>
                <label>
                    Résultat :
                </label>
                <label>
                    {this.state.resultat}
                </label>
            </div>
        );
    }
}

export default Resultat;