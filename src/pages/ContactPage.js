import React from 'react';

import './ContactPage.css'

export default function ContactPage() {
  return (
    <section className='contact-container'>
      <form action="https://formspree.io/f/xzbkrnjz" method="POST" className='contact-form'>
        <section className='field-user-name'>
          <label htmlFor='user-name'><h2>Name</h2></label>
          <input id='user-name' name='name' type='text' placeholder='enter full name' required/>
        </section>
         <section className='field-user-email'>
          <label htmlFor='user-email'><h2>Email</h2></label>
          <input id='user-email' name='email' type='text' placeholder='enter email' required />
         </section>
         <section className='field-user-message'>
          <label htmlFor='user-message'><h2>Message</h2></label>
          <textarea id='user-message' name='message' placeholder='enter message' required />
         </section>
        <button type='submit'>submit</button>
      </form>
    </section>
  );
}