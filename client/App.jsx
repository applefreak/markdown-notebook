import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './layouts/Home.jsx'
import NewNote from './layouts/NewNote.jsx'
import ViewNote from './layouts/ViewNote.jsx'

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/new' component={NewNote} />
          <Route path='/edit/:uuid' component={NewNote} />
          <Route path='/:uuid' component={ViewNote} />
        </Switch>
      </Router>
    )
  }
}

export default App
