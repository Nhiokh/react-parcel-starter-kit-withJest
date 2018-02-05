import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from '../src/App'


describe('This is my first test', ()=>{
  test('Display Hello World', ()=> {
    const Wrapper = shallow(<App/>)
    expect(Wrapper.find('h1').text()).toBe('Hello World!')
  })
})
