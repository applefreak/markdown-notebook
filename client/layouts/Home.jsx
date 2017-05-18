import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotesList from '../components/NotesList.jsx'

class Home extends Component {
  render () {
    return (
      <div>
        <section className='hero is-light is-bold'>
          <div className='hero-body has-text-centered'>
            <h1 className='title has-text-centered'>Share a Note!</h1>
            <Link className='button is-primary is-outline is-large' to='/new'>Create New Note!</Link>
          </div>
        </section>
        <NotesList />
      </div>
    )
  }
}

export default Home
