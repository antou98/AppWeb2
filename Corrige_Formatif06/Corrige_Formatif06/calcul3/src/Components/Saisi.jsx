import React, { Component } from 'react';

class Saisi extends Component {

    state = {
        nombre1: 0,
        nombre2: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAdd = () => {
        console.log("handle add")
        this.props.fonctionaddFromChildren(this.state.nombre1, this.state.nombre2)
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
            </div>
        );
    }
}

export default Saisi;