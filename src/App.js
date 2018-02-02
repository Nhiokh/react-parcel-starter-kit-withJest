import React from 'react';
import request from 'request';

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

  //LOGGER LOGIC
  handleNameChange(e){this.setState({userName:e.target.value})}
  handlePasswordChange(e){this.setState({userPassword:e.target.value})}

  handleSubmit(){
    console.log('click')
    request({
      url: "https://api.wizbii.com/v1/account/validate",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      json: true,
      body: "username=decouverte%40wizbii.com&password=decouvertewizbii&client_id=test&grant_type=password"
    }, (error, response, body) => {
      console.log(response.statusCode);
      if (error) {
        console.log(error);
        console.log(response.statusCode);
      }
      else if (!error && response.statusCode === 200) {
        console.log(body)
        localStorage.userToken = body["access-token"]
      }
    })
  }

  render(){
    return (
      !this.state.userLoggedIn ? (
        <div id='app-logger'>
          <div className="app-logger-inputs">
            <input
              placeholder="Nom d'utilisateur"
              type="text"
              id='app-logger-name'
              onChange={(e)=>{this.handleNameChange(e)}}
            />
            <input
              placeholder="Mot de passe"
              type="text"
              id='app-logger-password'
              onChange={(e)=>{this.handlePasswordChange(e)}}
            />
          </div>
          <button onClick={()=>{this.handleSubmit()}}>Submit</button>
        </div>
      ) : (
        <div id='app-news-feed'>
        </div>
      )
    )
  }
}

export default App;
