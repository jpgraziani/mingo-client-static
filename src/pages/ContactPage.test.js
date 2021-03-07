import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContactPage from './ContactPage'

describe(`ContactPage component`, () => {
  it('renders an ContactPage by default', () => {
    const wrapper = shallow(<ContactPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
