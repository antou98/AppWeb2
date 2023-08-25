import React, { Component } from "react";

class Additionne extends Component {

    constructor() {
        super();
        this.state = {
            number : 0,
        };
      }


    AddTen = () => {
        this.setState((prevState) => ({
          number: prevState.number + 10,
        }));
      };
    
      AddTwenty = () => {
        this.setState((prevState) => ({
          number: prevState.number + 20,
        }));
      };

    render() {
        return ( 
        <div><h1 > Additionne </h1> 
            <button onClick = { this.AddTen } > Add 10 </button>
            <button onClick={this.AddTwenty}>Add 20</button >
            <p>Number: {this.state.number}</p>
        </div>

        );
    }
}
  
export default Additionne;