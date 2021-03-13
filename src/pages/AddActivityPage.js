import React from 'react'
import ActivityForm from '../components/ActivityForm'
import config from '../config'
import ApiContext from '../ApiContext'

import './AddActivityPage.css'

class AddActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'supply-input': 'None, just have fun.'}
  }

  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  static contextType = ApiContext;

  handleChange = (event) => {
    this.setState({'supply-input': event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    const newActivity = {
      created: new Date(),
      name: e.target['activity-name-input'].value,
      supplies: e.target['supply-input'].value,
      directions: e.target['aboutActivity-input'].value,
    }
    
    fetch(`${config.API_ENDPOINT}/activities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newActivity),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
          return res.json()
      })
      .then(activity => {
        this.context.addActivity(activity)
        this.props.history.push(`/activity/${activity.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <article className='add-activity-container'>
        <ActivityForm onSubmit={this.handleSubmit} className='activity-form'>
          <section className='field'>
            <label htmlFor='activity-name-input'>
              <span className='max-ct'>*max 27 characters</span>
              <h2>Activity Name</h2>
            </label>
            
            <textarea 
              type='text' 
              id='activity-name-input' name='activity-name-input'
              placeholder='enter name' 
              maxLength="27"
              required />
          </section>
          <section className='field-supplies'>
            <label htmlFor='supply-input'>
              <h2>Supplies</h2>
            </label>
            
            <textarea type='text' id='supply-input' name='supply-input' 
            value={this.state['supply-input']} onChange={this.handleChange} 
            required />
          </section>
         
          <section className='field-description'>
            <label htmlFor='aboutActivity-input'>
              <h2>About Activity</h2>
            </label>
            <textarea type='text' id='aboutActivity-input' name='aboutActivity-input'
            placeholder='enter description'
            required /> 
          </section>
          <div className='buttons'>
            <button type='submit' className='sub-btn'>
              Add Activity
            </button>
          </div>
        </ActivityForm>
      </article>
    );
  }
}

export default AddActivityPage;