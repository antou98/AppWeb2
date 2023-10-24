import React, { Component } from 'react';
import Resultat from './Resultat';

class Saisi extends Component {

    state = {
        nombre1: 0,
        nombre2: 0,
        resultat: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAdd = () => {
        this.setState((state) => ({
            resultat: Number(state.nombre1) + Number(state.nombre2)
        }));
    }

    render() {
        return (
            <div>
                <form>
                    <label>Nombre 1 : </label>
                    <input type="number" name="nombre1" onChange={this.handleForm} />

                    <label>Nombre 2:</label>
                    <input type="number" name="nombre2" onChange={this.handleForm} />
                </form>

                <button onClick={this.handleAdd}>Additionner</button>

                <Resultat resultat={this.state.resultat} />

            </div>
        );
    }
}

export default Saisi;