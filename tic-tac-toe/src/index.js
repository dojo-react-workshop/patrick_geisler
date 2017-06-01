import React from 'react';
import ReactDOM from 'react-dom';

// let LAYOUT = [ null, null, null,
//                null, null, null,
//                null, null, null
//              ]
let LAYOUT = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]
             ]
class Square extends React.Component{
    state = {
      layout: null,
      player: 'X'
    }
playaPlaya = () => {
  this.setState({player: 'O'})
  this.setState({layout: this.state.player})
  console.log(this.state.player);
  this.setState({player: 'O'})
  console.log(this.state.player);

}

  render(){
    const divStyle = {
      outline: 'thin black solid',
      width: "50px",
      height: "50px",
      display: "inline-block",
      padding: "20px"
    }

    return(
      <button style={divStyle} onClick={this.playaPlaya}>
        {this.state.layout}
      </button>
    )
  }
}

class Row extends React.Component{

render(){
  let rowArr = []
  this.props.layout.forEach(function(index){
    rowArr.push(<Square layout={index} key={index}/>)
  })
  console.log(rowArr);

  return(
    <div>
      {rowArr}
    </div>
    );
  }
}


class GameBoard extends React.Component{
 render(){
   let boardArr = []
   this.props.layout.forEach(function(index){
     boardArr.push(<Row layout={index} key={index}/>)
   })
   return(
     <div>
      {boardArr}
     </div>
   );
 }
}

class App extends React.Component{
  render(){
    return(
      <GameBoard layout = {this.props.layout}/>
    );
  }
}

ReactDOM.render(<App layout={LAYOUT}/>, document.getElementById('root'));
