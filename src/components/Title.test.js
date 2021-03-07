import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Title from './Title'

describe(`Title component`, () => {
  it('renders a Title by default', () => {
    const wrapper = shallow(<Title />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})