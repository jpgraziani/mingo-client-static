import React from 'react'
import { Link } from 'react-router-dom'
import { findActivity } from '../ActivityHelpers'
import ApiContext from '../ApiContext'
import './SelectedActivityPage.css'

export default class SelectedActivityPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext

  render() {
    const { activities = [] } = this.context
    const { activityId } = this.props.match.params
    const activity = findActivity(activities, activityId) || { content: ''}

    return (
        <article className='single-activity'>
          <div className='single-activity-info'>
            <section className='activity-title'>
              <h2>{activity.name}</h2>
            </section>
            <div className='back-container'>
              <Link to='/activities' className='back-btn'>
                previous
              </Link>
              <Link to='/add-activity' className='back-btn'>
                add activity
              </Link>
            </div>

            <section className='supplies'>
              <div className='hr' />
              <h3>Supplies</h3>
              <div className='hr lower' />
              <p>{activity.supplies}</p>
            </section>

            <section className='directions'>
              <div className='hr' />
              <h3>About Activity</h3>
              <div className='hr lower' />
              <p>{activity.directions}</p>
            </section>
            
            
          </div>
            
        </article>
    );
  }
}