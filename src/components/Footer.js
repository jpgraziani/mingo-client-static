import React from 'react';
import './Footer.css'
import './mountain.css'

const Footer = () => {
  return(
    <section className='footer-content'>
      <div className='footer-grid container'>
        <div className='sign-up'>
          <h3>Stay Updated</h3>
          <p>Sign up for our newsletter to get the latest news, special offers, and event information</p>
        
          <div className='email-sign-up'>
            <form action="https://formspree.io/f/xzbkrnjz" method="POST" className='email-form container'>
              <label htmlFor='email' className='email-label'>
                Say Hello!
              </label><br />
              <input id='email' name='email' type='text' placeholder='email' className='footer-email' required />
              
              <input type='submit' value='submit' id="img-btn" />
            </form>
          </div>
        </div>
      
        <div className='footer-mood'>
          <h3>Current Mood &amp; Location</h3>
          <p>Sonoran Desert Sunset</p> 
        </div>
      </div>
      <section className='mountain-container'>
          <div className="bg">
            <div className="mountain">
              <div className="mountain-top">
                <div className="mountain-cap-1"></div>
                <div className="mountain-cap-2"></div>
                <div className="mountain-cap-3"></div>
              </div>
            </div>
            <div className="mountain-two">
              <div className="mountain-top">
                <div className="mountain-cap-1"></div>
                <div className="mountain-cap-2"></div>
                <div className="mountain-cap-3"></div>
              </div>
            </div>
            <div className="mountain-three">
              <div className="mountain-top">
                <div className="mountain-cap-1"></div>
                <div className="mountain-cap-2"></div>
                <div className="mountain-cap-3"></div>
              </div>
            </div>
              <div className="cloud"></div>
              <div className="cloud-two"></div>
            </div>
          </section>
    </section>
  );
}

export default Footer