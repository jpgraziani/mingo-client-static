import React from 'react'
import { Link } from 'react-router-dom'
import ActivityCard from '../components/ActivityCard'
import ApiContext from '../ApiContext'
import './ActivityList.css'

export default class ActivityList extends React.Component {

 static contextType = ApiContext;

  render() {
    const { activities=[] } = this.context
    return (
      <section>
        <Link to='/add-activity' className='btns btn-full'>Add Activity</Link>
        <div>
          <ul className='activities-list'>
            {activities.map((activity, idx) => 
              <li key={idx + activity.id} className='activity-item'>
                <ActivityCard 
                  id={activity.id}
                  name={activity.name}
                  date={activity.date}
                />
              </li>
            )}
          </ul>
        </div>
      </section>
    );
  }
}