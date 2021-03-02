import React from 'react'

import ActivityCard from '../components/ActivityCard'
import ApiContext from '../ApiContext'
import './ActivityList.css'

export default class ActivityList extends React.Component {

 static contextType = ApiContext;

  render() {
    const { activities=[] } = this.context
    return (
      <section>
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