import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SelectedActivityPage from './SelectedActivityPage'

describe(`SelectedActivityPage component`, () => {
  it('renders a SelectedActivityPage by default', () => {
    const wrapper = shallow(<SelectedActivityPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

