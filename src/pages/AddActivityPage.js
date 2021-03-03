import React from 'react'

import ApiContext from '../ApiContext'

class AddActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'supply-input': 'None, just have fun.'}
  }

  handleChange = (event) => {
    this.setState({'supply-input': event.target.value})
  }

  static contextType = ApiContext;

  render() {
    return (
      <article>
        <form action='#'>
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
        </form>
      </article>
    );
  }
}

export default AddActivityPage;