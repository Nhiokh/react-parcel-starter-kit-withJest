import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
  }

  render(){
    return (
      !this.state.userLoggedIn ? (
        <div id='app-logger'>
        </div>
      ) : (
        <div id='app-news-feed'>
        </div>
      )
    )
  }
}

export default App;
