import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'
import './ActivityCard.css'
// import { format } from 'date-fns'

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
    const { name, id, directions  } = this.props
    return (
      <section>
        <div className='activity-card card'>
          <div className='hr' />
          <div className='title-card'>
            <h2 className='title-text'>{name}</h2>
          </div>
          <div className='hr lower-hr' />
          <div className='preview-card hidden'>
            <p className='preview-text'>{directions}</p>
          </div>

          <div className='click-card-container'>
            <div >
              <Link to={`/activity/${id}`} className='activity-card-btn act-link'>
                read me 
              </Link>
            </div>
            <div>
              <input
                className='activity-card-btn input-btn'
                type='button'
                onClick={this.handleDelete}
                value='delete'
              />
            </div> 
          </div>
        </div>
      </section>
    );
  }
}