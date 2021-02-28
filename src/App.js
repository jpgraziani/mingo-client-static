import React, { Fragment } from 'react'

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <HomePage />
        <Footer />
      </Fragment>
     );
  };
}

export default App;