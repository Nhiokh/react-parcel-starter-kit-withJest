import React from 'react';

import './app.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      userName: '',
      userPassword: ''
    }
  }

  render(){
    return (
      !this.state.userLoggedIn ? (
        <div id='app-logger'>
          <div className="app-logger-inputs">
            <input
              placeholder="Nom d'utilisateur"
              type="text"
            />
            <input
              placeholder="Mot de passe" 
              type="text"
            />
          </div>
          <button>Submit</button>
        </div>
      ) : (
        <div id='app-news-feed'>
        </div>
      )
    )
  }
}

export default App;
