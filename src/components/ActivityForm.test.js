import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ActivityForm from './ActivityForm'

describe(`ActivityForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.ActivityForm by default', () => {
    const wrapper = shallow(<ActivityForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ActivityForm given props', () => {
    const wrapper = shallow(<ActivityForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})