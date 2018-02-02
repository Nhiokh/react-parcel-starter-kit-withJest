import React from 'react'
import Enzyme,{ shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from '../src/App'

describe('Testing App component', ()=>{
  test('Should return logger if user not logged in', ()=> {
    const app = shallow(<App/>)
    app.setState({userLoggedIn:false})
    expect(app.find('#app-logger')).toHaveLength(1)
  })
  test('Should return news feed if user is logged in', ()=> {
    const app = shallow(<App/>)
    app.setState({userLoggedIn:true})
    expect(app.find('#app-news-feed')).toHaveLength(1)
  })
})
