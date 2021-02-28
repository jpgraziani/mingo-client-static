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
          <li><Link>send a message</Link></li>
					<li><Link>explore activities</Link></li>
					<li><Link>explore prints</Link></li>
        </ul>
      </div>

      <div className='contact-container'>
        <div className='contact-info'>
          <h3>Connect</h3>
          <p>
            (719) 235-5080<br />
					  <Link>info@mingo.com</Link>
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