import React, { Component } from 'react';

class Calculatrice extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    };
    //bind in constructor
    this.handleNumericChange = this.handleNumericChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleNumericChange(event) {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    this.setState({
      [targetName]: targetValue,
    });
  }

  add() {
    const { number1, number2 } = this.state;
    const result = Number(number1) + Number(number2);

    this.setState({
      result: result,
    });
  }

  generateJSX(number){
    const jsx = number >= 0 ? <div style={{border: 'solid 1px black',left:'200px',backgroundColor:'green'}} >{number}</div> : <div style={{border: 'solid 1px black',left:'200px',backgroundColor:'red'}} >{number}</div>;
    return(jsx);
  }

  render() {
    const num =  this.state.result;
    const jsx = this.generateJSX(num);
    return (
      <div>
        <h1>Plus+</h1>
        <input
          type="number"
          name="number1"
          value={this.state.number1}
          onChange={this.handleNumericChange}
        />
        <input
          type="number"
          name="number2"
          value={this.state.number2}
          onChange={this.handleNumericChange}
        />
        <button onClick={this.add}>Add</button>
        <p>{this.state.result}</p>
        {jsx}
      </div>
    );
  }
}
export default Calculatrice;