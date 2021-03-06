import React from 'react'
import ActivityForm from '../components/ActivityForm'
import config from '../config'
import ApiContext from '../ApiContext'

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
      <article>
        <ActivityForm onSubmit={this.handleSubmit}>
          <section className='field'>
            <label htmlFor='activity-name-input'>
              <h4>Activity Name</h4>
            </label>
            <hr />
            <input type='text' id='activity-name-input' name='activity-name-input' required />
          </section>
          <section className='field'>
            <label htmlFor='supply-input'>
              <h4>Supplies</h4>
            </label>
            <hr />
            <textarea type='text' id='supply-input' name='supply-input' value={this.state['supply-input']} onChange={this.handleChange} />
          </section>
          <section className='field'>
            <label htmlFor='aboutActivity-input'>
              <h4>About Activity</h4>
            </label>
            <hr />
            <textarea type='text' id='aboutActivity-input' name='aboutActivity-input'  required/>
          </section>
          <div className='buttons'>
            <button type='submit' className='btns btn-full'>
              Add Activity
            </button>
          </div>
        </ActivityForm>
      </article>
    );
  }
}

export default AddActivityPage;