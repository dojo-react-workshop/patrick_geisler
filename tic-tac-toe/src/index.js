import React from 'react';
import ReactDOM from 'react-dom';
import calculateWinner from './calculateWinner'

class Square extends React.Component{

  render(){
    const squareStyle ={
      height: '50px',
      width:'50px'
    };
    return(
      <button style={squareStyle} onClick={() => this.props.onClick(this.props.value)}>
        {this.props.layout[this.props.value]}
      </button>
    );
  }
}

class GameBoard extends React.Component{
  state = {
    layout: [null, null, null,
              null, null, null,
              null, null, null
            ],
    player: 'X',
  }

  renderSquares(i){
    return <Square
    layout={this.state.layout}
    value={i}
    onClick={this.onClick}
    />
  }

  onClick = (i) => {
    const newSquares = this.state.layout.slice()
    newSquares[i] = this.state.player
    let nextPlayer = 'X'
    if(this.state.player === 'X'){
      nextPlayer = 'O'
    } else {
      nextPlayer = 'X'
    }

    this.setState({
      layout: newSquares,
      player: nextPlayer
    })
  }


 render = () => {
   const winner = calculateWinner(this.state.layout);
   let status = ''
    if (winner) {
      status = `${alert('WINNER')}`
    } else {
      status = `Next Up ${this.state.player}`
    }
   return(
     <div>
      <h1>{status}</h1>
      <div>
        {this.renderSquares(0)}
        {this.renderSquares(1)}
        {this.renderSquares(2)}
      </div>
      <div>
        {this.renderSquares(3)}
        {this.renderSquares(4)}
        {this.renderSquares(5)}
      </div>
      <div>
        {this.renderSquares(6)}
        {this.renderSquares(7)}
        {this.renderSquares(8)}
      </div>

     </div>
   );
 }
}

class App extends React.Component{
  render(){
    return(
      <GameBoard/>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
