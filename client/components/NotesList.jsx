import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fetch from 'axios'
import utils from '../utils'

class NotesList extends Component {
  constructor () {
    super()

    // this.state = this.getLocalUUID()
    this.state = Object.assign(utils.getLocalUUID(), {notesContent: []})
  }

  componentDidMount () {
    let notesContent = Object.entries(this.state.notes).map(note => {
      let uuid = note[0]
      return fetch.get(`/api/${uuid}`)
    })

    fetch.all(notesContent)
    .then(res => res.map(res => res.data))
    .then(res => this.setState(Object.assign(this.state, {notesContent: res})))
  }

  render () {
    const notesListItem = this.state.notesContent.map((note, i) => (
      <li key={i}>
        <Link to={`/${note.uuid}`}>{note.uuid}</Link>
        <Link to={`/edit/${note.uuid}`}> Edit</Link>
      </li>
    ))

    return (
      <ul>
        {notesListItem}
      </ul>
    )
  }
}

export default NotesList
