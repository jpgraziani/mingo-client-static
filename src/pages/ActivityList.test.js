import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ActivityList from './ActivityList'

describe(`ActivityList component`, () => {
  it('renders an ActivityList by default', () => {
    const wrapper = shallow(<ActivityList />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

