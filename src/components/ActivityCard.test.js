import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ActivityCard from './ActivityCard'

describe(`ActivityCard component`, () => {
  it('renders a .ActivityCard by default', () => {
    const wrapper = shallow(<ActivityCard />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})