import React from 'react'
import { Link } from 'react-router-dom'
import ActivityCard from '../components/ActivityCard'
import ApiContext from '../ApiContext'
import './ActivityList.css'


export default class ActivityList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

 static contextType = ApiContext;
  
  render() {
    
    const { activities=[] } = this.context
    return (
      <section className='activity-list-container'>
        <div className='act-list-top-nav'>
          <Link to='/add-activity' className='add-btn'>Add Activity</Link>
        </div>
        
        <div>
          <ul className='activities-list'>
            {activities.map((activity, idx) => 
              <li key={idx + activity.id} className='activity-item'>
                <ActivityCard 
                  id={activity.id}
                  name={activity.name}
                  created={activity.created}
                  directions={activity.directions}
                />
              </li>
            )}
          </ul>
        </div>
      </section>
    );
  }
}