import React from 'react'

import { findActivity } from '../ActivityHelpers'
import ApiContext from '../ApiContext'

export default class SelectedActivityPage extends React.Component {
  render

  static contextType = ApiContext

  render() {
    const { activities = [] } = this.context
    const { activityId } = this.props.match.params
    const activity = findActivity(activities, activityId) || { content: ''}

    return (
      <>
        <article className='single-activity'>
          <div className='single-activity-info'>
            <section>
              <h3>{activity.name}</h3>
            </section>
            <section className='desc'>
              <hr />
              <h3>Supplies Needed</h3>
              {activity.supplies}
            </section>
            <section>
              <hr />
              <h3>About Activity</h3>
              {activity.description}
            </section>
          </div>
        </article>
      </>
    );
  }
}