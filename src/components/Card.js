import React from 'react';
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
  render() {
    return (
      <section>
        <div className='activity-card'>
          <Link to='/activities'>
            <h2>Paint With Sponges</h2>
            <p>02.28.2021</p>
          </Link>
          <button>
            remove
          </button>
        </div>
      </section>
    );
  }
}