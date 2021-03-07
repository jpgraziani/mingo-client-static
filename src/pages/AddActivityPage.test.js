import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddActivityPage from './AddActivityPage'

describe(`AddActivityPage component`, () => {
  it('renders an AddActivityPage by default', () => {
    const wrapper = shallow(<AddActivityPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
