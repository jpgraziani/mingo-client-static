import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <h2>Message Me</h2>
      <form action="https://formspree.io/f/xzbkrnjz" method="POST">
        <label htmlFor='user-name'>Name</label>
        <input id='user-name' name='name' type='text' placeholder='enter full name' required/> <br />
        <label htmlFor='user-email'>Email</label>
        <input id='user-email' name='email' type='text' placeholder='enter email' required /> <br />
        <label htmlFor='user-message'>Message</label>
        <textarea id='user-message' name='message' placeholder='enter message' required /> <br />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}