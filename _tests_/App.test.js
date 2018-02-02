import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from '../src/App'

describe('Testing App component', ()=>{

  test('Should return logger if user not logged in', ()=> {
    const app = shallow(<App/>)
    app.setState({userLoggedIn:false})
    expect(app.find('#app-logger')).toHaveLength(1)
  })

  test('Changing username input in logger should change userName state', ()=> {
    const app = mount(<App/>)
    app.setState({userLoggedIn:false})
    app.find('#app-logger-name').simulate('change', {target : {value : "Flora"}})
    expect(app.state('userName')).toEqual("Flora")
  })

  test('Changing password input in logger should change userPassword state', ()=> {
    const app = mount(<App/>)
    app.setState({userLoggedIn:false})
    app.find('#app-logger-password').simulate('change', {target : {value : "Banana"}})
    expect(app.state('userPassword')).toEqual("Banana")
  })

  test('Should return news feed if user is logged in', ()=> {
    const app = shallow(<App/>)
    app.setState({userLoggedIn:true})
    expect(app.find('#app-news-feed')).toHaveLength(1)
  })



})
