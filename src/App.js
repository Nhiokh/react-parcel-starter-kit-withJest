import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

  doIncrement(){
    this.setState({count:this.state.count+1})
  }

  render(){
    return (
      <div>
        <p>Simple React App</p>
        <button onClick={()=>{this.doIncrement()}}>Increment</button>
        <p id='app-counter'>Count: {this.state.count}</p>
      </div>
    )
  }
}

export default App;
