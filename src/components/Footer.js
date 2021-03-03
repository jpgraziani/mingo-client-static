import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <section className='footer-content'>
      <div className='footer-grid container'>
        <div className='sign-up'>
          <h3>Stay Updated</h3>
          <p>Sign up for our newsletter to get the latest news, special offers, and event informatio</p>
        
          <div className='email-sign-up'>
            <form action='#' className='email-form container'>
              <input type='text' placeholder='email' />
              <input type='submit' value='x' />
            </form>
          </div>
        </div>
      </div>

      <div className='footer-nav'>
        <h3>Info</h3>
        <ul>
          <li><Link to='/contact'>contact</Link></li>
					<li><Link to='/activities'>activities</Link></li>
					<li><Link to='/prints'>prints</Link></li>
        </ul>
      </div>

      <div className='contact-container'>
        <div className='contact-info'>
          <h3>Connect</h3>
          <p>
					  info@mingo.com
          </p>
        </div>
        <div className='contact-address'>
          <p>Somwhere in the Sonoran Desert</p>
        </div>
      </div>
    </section>
  );
}

export default Footer