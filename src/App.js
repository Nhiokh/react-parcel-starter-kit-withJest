import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  render(){
    return (
      <div>
        <p>Simple React App</p>
        <button>Increment</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}

export default App;
