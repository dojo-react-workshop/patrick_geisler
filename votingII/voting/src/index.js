import React from 'react';
import ReactDOM from 'react-dom';


class Container extends React.Component {
  constructor(props){
     super(props)
     this.state = {
       squares : [
           {
               title: 'Javascript',
               count: 0
           },
           {
               title: 'Python',
               count: 0
           },
           {
               title: 'Orange',
               count: 0
           }
         ]
     }
    this.increment = this.increment.bind(this)
  }

  increment(title) {
    const newSquares = this.state.squares

    const isTheOneYo = (element) => {
      return title === element.title
    }
    const squareToUpdate = newSquares.find(isTheOneYo)
    console.log(squareToUpdate)

    squareToUpdate.count++
    this.setState({
      squares: newSquares
    })
  }

  render() {
    const compareFunc = (a, b) => {
      return b.count - a.count // reverse order http://devdocs.io/javascript/global_objects/array/sort
    }

    const sortedSquares = this.state.squares.sort(compareFunc)

    const squares = sortedSquares.map((squareObj, idx) => {
        return <Square key={idx} squareData={squareObj} update={this.increment}/>
    })
    return (
        <div>
            <h1>Take a look at my squares!</h1>
            {squares}
        </div>
    )
  }
}

// class Counter extends React.Component {
//     constructor(props){
//       super(props);
//
//       this.state = {
//         data
//       }
//     }
//     render = () =>{
//         return (
//         )
//     }
// }

const Square = ({ squareData, update }) => {
    const style = {
        height: '100px',
        width: '120px',
        fontSize: '20px',
        color: 'black',
        backgroundColor: 'white',
        display: 'inline-block',
        paddingLeft: '10px'
    };
    const buttonStyle = {
        fontSize: '20px',
        color: 'black',
        display: 'inline-block'
    };
    const wrapper = {
        display: 'inline-block'
    };
    const imgStyle = {
        height: '40px',
        width: '40px',
        display: 'inline-block'
    };
     const text = `${squareData.title}`;
     const count = `${squareData.count}`;
     function voteLog(){
       update(squareData.title)
     }
      return (
        <div>
          <div style={wrapper}>
            <div style={buttonStyle}>
              {count}
            </div>
            <div style={style}>
              {text}
            </div>
            <button style={imgStyle} onClick={voteLog}></button>
          </div>
        </div>
      )
}

ReactDOM.render(<Container />, document.getElementById('root'));
