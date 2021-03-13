import React from 'react';
import { Link } from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa';

import './NavBar.css'

export default  class NavBar extends React.Component {
  state={
    isOpen: false
  }

  handleToggle = () => {
    // this.setState({isOpen: !this.state.isOpen})
    if (!this.state.isOpen) {
      this.setState({isOpen: true})
    } else {
      this.setState({isOpen: false})
    }
  }

  render() {
    return (
      <header>
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <Link to='/' className='logo-link'>
                <h1>mingo</h1>
              </Link>
              <button 
                type='button' 
                className='nav-btn'
                value='nav button' 
                onClick={this.handleToggle}>
                <FaAlignRight className='nav-icon' />.
              </button>
            </div>
            <div className='links-container'>
              <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                <li><Link to='/activities' className='nav-path-link'>activities</Link></li>
                <li><Link to='/prints' className='nav-path-link'>prints</Link></li>
                <li><Link to='/contact' className='nav-path-link'>contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

/*
<header className='header-nav'>
        <section className='nav-container'>
          <div className='logo-text'>
            <Link to='/'><h1>mingo</h1></Link>
          </div>
          <nav role='navigation' className='top-navigation'>
            <Link to='/contact'>contact</Link>
            <Link to='/activities'>activities</Link>
            <Link to='/prints'>prints</Link>
          </nav>
        </section>
      </header>
*/