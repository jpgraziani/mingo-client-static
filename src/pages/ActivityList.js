import React from 'react'

import Card from '../components/Card'
import Store from '../data'

export default class ActivityList extends React.Component {
  state = {
    activities: []
  }

  componentDidMount() {
    this.setState({
      activities: Store
    })
  }

  render() {
    return (
      <section>
        <div>
          <ul>
            <li><Card /></li>
          </ul>
        </div>
      </section>
    );
  }
}