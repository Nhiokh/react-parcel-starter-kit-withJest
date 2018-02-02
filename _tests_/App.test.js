import React from 'react'
import Enzyme,{ shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from '../src/App'

describe('Testing App component', ()=>{
  test('Should return App component', ()=> {
    const app = shallow(<App/>)
    expect(app).toHaveLength(1)
  })
  test('Initial counter state should be 0', ()=> {
    const app = shallow(<App/>)
    expect(app.find('#app-counter').text()).toBe('Count: 0')
  })
})
