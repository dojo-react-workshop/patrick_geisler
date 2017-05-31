import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
