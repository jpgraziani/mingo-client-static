import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PrintPage from './PrintsPage'

describe(`PrintPage component`, () => {
  it('renders an PrintPage by default', () => {
    const wrapper = shallow(<PrintPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})