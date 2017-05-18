import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './layouts/Home.jsx'
import NewNote from './layouts/NewNote.jsx'
import ViewNote from './layouts/ViewNote.jsx'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <div className='nav-left'>
              <Link to='/' className='nav-item title is-3'>MD Notebook</Link>
            </div>
            <div className='nav-right'>
              <div className='nav-item '><Link to='/new' className='button is-primary'>+ Add</Link></div>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={NewNote} />
            <Route path='/edit/:uuid' component={NewNote} />
            <Route path='/:uuid' component={ViewNote} />
          </Switch>
          <footer className='footer'>
          <div className='container'>
            <div className='content has-text-centered'>
              <p><strong>Markdown Notebook</strong> is brought to you by Poyu Chen</p>
            </div>
          </div>
        </footer>
        </div>
      </Router>
    )
  }
}

export default App
