import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        count: 0
      }
    }
    upCount = () => {
      this.setState({
        count: (this.state.count + 1)
      })
    }
    downCount = () => {
      this.setState({
        count: (this.state.count - 1)
      })
    }
    render = () =>{
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.upCount}> Uppers </button>
            <button onClick={this.downCount}> Downers </button>
            </div>
        )
    }
}


class Application extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        counter: 1
      }
    }
    newCounterNum = (arr) => {
      this.setState({
        counter: (this.state.counter + 1)
      })
    }

    render = (arr) =>{
        let counterArr = []
        for (let i = 0; i< this.state.counter; i++)
            counterArr.push(<Counter key={i}/>)
        return (
          <div>
            <button onClick={this.newCounterNum}> New Counter </button>
            {counterArr}
          </div>
        )
    }
}

ReactDOM.render(
  <Application/>,
  document.getElementById('root')
);
