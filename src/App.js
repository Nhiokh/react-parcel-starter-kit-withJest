import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  increment = () => {
    this.setState({count++})
  }

  render(){
    return (
      <div>
        <p>Simple React App</p>
        <button onClick={()=>{this.increment}}>Increment</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}

export default App;
