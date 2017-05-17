import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotesList from '../components/NotesList.jsx'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Share a Note!</h1>
        <Link to='/new'>Create New Note!</Link>
        <NotesList />
      </div>
    )
  }
}

export default Home
