import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'

export default class ActivityCard extends React.Component {

  static contextType = ApiContext;

  render() {
    const { name, id, date } = this.props
    return (
      <section>
        <div className='activity-card'>
          <Link to={`/activity/${id}`}>
            <h2>{name}</h2>
            <p>{date}</p>
          </Link>
          <button>
            remove
          </button>
        </div>
      </section>
    );
  }
}