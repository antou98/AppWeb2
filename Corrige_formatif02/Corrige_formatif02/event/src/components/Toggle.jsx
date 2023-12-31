import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn: true 
        };
    }

    // Cette liaison est nécéssaire afin de permettre    
    // l'utilisation de `this` dans la fonction de rappel.    this.handleClick = this.handleClick.bind(this);  }

    handleClick = () =>{ 
        console.log(this.state.isToggleOn)
        this.setState(state => 
            ({ 
                isToggleOn: !state.isToggleOn 
            })); 
        }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}


export default Toggle;