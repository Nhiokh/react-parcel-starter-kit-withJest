import React from 'react'
import Enzyme,{ shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from '../src/App'

test('Should return App component', ()=> {
  const app = shallow(<App/>)
  expect(app).toHaveLength(1)
})
