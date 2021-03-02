import React from 'react'

import ActivityCard from '../components/ActivityCard'
import ApiContext from '../ApiContext'

export default class ActivityList extends React.Component {

 static contextType = ApiContext;

  render() {
    const { activities=[] } = this.context
    return (
      <section>
        <div>
          <ul>
            {activities.map((activity, idx) => 
              <li key={idx + activity.id}>
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