import React from "react";


class Board extends React.Component {
    constructor(){
        super();
        this.state ={
            player : "playerX",
            squares : Array(9).fill(null),
        }

        this.renderSquare = this.renderSquare.bind(this);
        this.renderPlayer = this.renderPlayer.bind(this);
    }



    renderPlayer(index){
        console.log("test" + index);
        const squares = this.state.squares;
        squares[index] = 'X';
        this.setState(()=>({
            squares : squares,
        }));
    }

    renderSquare(i) {
      return <Square value={i} functionPlayer={this.renderPlayer}/>;
    }

    render(){
        return(
        <>
            <table>
                <tr>
                    <td> {this.renderSquare(1)}</td>
                    <td> {this.renderSquare(2)}</td>
                    <td> {this.renderSquare(3)}</td>
                </tr>
                <tr>
                    <td> {this.renderSquare(4)}</td>
                    <td> {this.renderSquare(5)}</td>
                    <td> {this.renderSquare(6)}</td>
                </tr>
                <tr>
                    <td> {this.renderSquare(7)}</td>
                    <td> {this.renderSquare(8)}</td>
                    <td> {this.renderSquare(9)}</td>
                </tr>
            </table>
        </>);
    }
  }

  class Square extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
            value : props.value,
            
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked(){
            this.props.functionPlayer(this.state.value);

    }

    render() {
      return (
        <button className="square" onClick={this.clicked}>
          {this.state.value}
        </button>
      );
    }
  }
  


 // launch de tictactoe 
const TicTacToe = () =>{
    return(<>
    <Board></Board>
    </>)
} 

export default TicTacToe;