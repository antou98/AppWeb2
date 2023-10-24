import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { 
        this.setState({   
            // Les mises à jour de l’état peuvent être asynchrones 
            //React peut grouper plusieurs appels à setState() en une seule mise à jour pour des raisons de performance.
            date: new Date() 
        }); 
    }

    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>      </div>
        );
    }
}

export default Clock;