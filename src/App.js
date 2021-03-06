import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ActivityList from './pages/ActivityList'
import SelectedActivityPage from './pages/SelectedActivityPage'
import PrintsPage from './pages/PrintsPage'
import AddActivity from './pages/AddActivityPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import ApiContext from './ApiContext'
// import Store from './data';
import config from './config'

import './App.css';

class App extends React.Component {
  state = {
    activities: []
  };

  componentDidMount() {
   fetch(`${config.API_ENDPOINT}/activities`)
    .then(activitiesResponse => {
      if (!activitiesResponse.ok)
      return activitiesResponse.json()
        .then(e => Promise.reject(e))
      return activitiesResponse.json()
    })
    .then(activities => {
      this.setState({ activities })
    })
    .catch(error => {
      console.error({ error })
    })
  }

  handleAddActivity = activity => {
    this.setState({
      activities: [
        ...this.state.activities, 
        activity
      ]
    })
  }

  handleDeleteActivity = (activityId) => {
    this.setState({
      activities: this.state.activities.filter(activity => 
        activity.id !== activityId)
    })
  }

  renderRoutes() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/activities' component={ActivityList} />
        <Route exact path='/activity/:activityId' component={SelectedActivityPage} />
        <Route exact path='/add-activity' component={AddActivity} />
        <Route exact path='/prints' component={PrintsPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Fragment>
    );
  }

  render() {
    const value = {
      activities: this.state.activities,
      addActivity: this.handleAddActivity,
      deleteActivity: this.handleDeleteActivity
    }
    return (
      <main>
        <NavBar />
        <ApiContext.Provider value={value}>
          {this.renderRoutes()}
        </ApiContext.Provider>
        <Footer />
      </main>
     );
  };
}

export default App;
