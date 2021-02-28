import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ActivityList from './pages/ActivityList'
import Footer from './components/Footer'

import Store from './data';

import './App.css';

class App extends React.Component {
  state = {
    activities: []
  };

  componentDidMount() {
   this.setState(Store)
  }

  renderRoutes() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/activities' component={ActivityList} />
      </Fragment>
    );
  }

  render() {
    console.log(this.state.activities)
    return (
      <main>
        <NavBar />
        <div>{this.renderRoutes()}</div>
        <Footer />
      </main>
     );
  };
}

export default App;
