import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fetch from 'axios'
import utils from '../utils'

class NotesList extends Component {
  constructor () {
    super()

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
    let notesListItem = this.state.notesContent.map((note, i) => (
      <div className='box' key={i}>
        <Link to={`/${note.uuid}`}>{note.uuid}</Link>
        <Link className='button is-small is-pulled-right' to={`/edit/${note.uuid}`}>Edit</Link>
      </div>
    ))
    if (!notesListItem.length) notesListItem = <i className='has-text-centered title is-4'>No Content Yet...</i>

    return (
      <div className='notes-list has-text-centered'>
        {notesListItem}
      </div>
    )
  }
}

export default NotesList
