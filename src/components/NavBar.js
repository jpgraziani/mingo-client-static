import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css'

export default  class NavBar extends React.Component {
  render() {
    return (
      <header className='container'>
        <section className='nav-container'>
          
          <nav role='navigation' className='top-navigation'>
            <div className='logo-text'>
              <Link to='/'><h1>mingo</h1></Link>
            </div>
            <Link to='/'>contact</Link>
            <Link to='/'>activities</Link>
            <Link to='/'>prints</Link>
          </nav>
        </section>
      </header>
    );
  }
}