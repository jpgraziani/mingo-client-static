import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'

export default class ActivityCard extends React.Component {
  static defaultProps = {
    deleteActivity: () => {}
  }

  static contextType = ApiContext;

  handleDelete = e => {
    e.preventDefault()

    const activityId = this.props.id

    fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) 
        return res.json().then(e => Promise.reject(e))
        return res.json()
    })
    .then(() => {
      this.context.deleteActivity(activityId)
      this.props.deleteActivity(activityId)
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const { name, id, date } = this.props
    return (
      <section>
        <div className='activity-card'>
          <Link to={`/activity/${id}`}>
            <h2>{name}</h2>
            <p>{date}</p>
          </Link>
          <button
            className='btns btn-full'
            type='button'
            onClick={this.handleDelete}
          >
            remove
          </button>
        </div>
      </section>
    );
  }
}