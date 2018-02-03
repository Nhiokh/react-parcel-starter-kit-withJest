import React from 'react';
import request from 'request';

import './app.scss'


const NewsCard = (item,key) => (
  <p>{key}</p>
)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      userLoggingName: '',
      userLoggingPassword: '',
      userToken: '',
      userRealName: '',
      newsFeedBody: [],
    }
  }

  //LOGGER LOGIC
  handleNameChange(e){this.setState({userLoggingName:e.target.value})}
  handlePasswordChange(e){this.setState({userLoggingPassword:e.target.value})}

  handleSubmit(){

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
        this.setState({
          userToken: body['access-token'],
          userRealName: body.profile.name,
        }, ()=>{

              request({
                url: "https://api.wizbii.com/v2/dashboard/?direction=newest",
                method: "POST",
                headers: {
                  "Authorization": `Bearer ${this.state.userToken}`
                },
                json: true,
                body: {}
              },
              (error, response, body) => {
                console.log(response.statusCode);
                if (error) {
                  console.log(error);
                  console.log(response.statusCode);
                }
                else if (!error && response.statusCode === 200 && body!==null) {
                  this.setState({newsFeedBody: body.feed_items.feed_items}, ()=>{
                    console.log(this.state.newsFeedBody)
                    setTimeout(()=>{this.setState({userLoggedIn: true})},500)
                  })
                }
              }
            )
          })

      }
    })
  }

  componentWillUpdate(nextState){}

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
          <h1>Hello {this.state.userRealName}</h1>
          <section className="app-news-feed-list">
            {
              this.state.newsFeedBody.map((item,key)=>{
                if (item.publication !== undefined){
                  return (
                    <div key={key} className="news-feed-card">
                      <h2 className="news-feed-card-user_name">{item.publication.poster.displayName}</h2>
                      <p className="news-feed-card-post_date">{item.date}</p>
                      <p className="news-feed-card-content">{item.publication.content}</p>
                    </div>
                  )
                } else {
                  console.log('plop')
                }
              })
            }
          </section>
        </div>
      )
    )
  }
}

export default App;
