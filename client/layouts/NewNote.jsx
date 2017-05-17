import React, { Component } from 'react'
import NotesList from '../components/NotesList.jsx'
import Editor from '../components/Editor.jsx'
import utils from '../utils'
import fetch from 'axios'
import _ from 'lodash'

class NewNote extends Component {
  constructor () {
    super()

    this.state = {data: null}
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handlePublish = this.handlePublish.bind(this)
  }

  componentDidMount () {
    let { params } = this.props.match
    if (Object.keys(params).length) {
      fetch.get(`/api/${params.uuid}`)
      .then(res => {
        this.setState({data: res.data})
      })
    }
  }

  handlePublish () {
    console.log('Publish pressed', this.state)
    const { uuid, md_content } = this.state.data
    if (uuid) {
      // look up edit key
      const edit_key = utils.getLocalUUID().notes[uuid]
      fetch.put(`/api/${uuid}/edit`, {edit_key, md_content})
      .then((res) => {
        console.log(res)
      }).catch((err) => console.log(err))
    } else {
      // new note
      console.log('new note!')
      fetch.post(`/api`, {md_content})
      .then((res) => {
        const {edit_key, uuid} = res.data
        console.log('new note meta', edit_key, uuid)
        let newNote = {}
        newNote[uuid] = edit_key
        utils.addNewNote(newNote)
      }).catch((err) => console.log(err))
    }
  }

  handleTextChange (event) {
    let newState = {}
    newState = {
      data: {
        md_content: event.target.value
      }
    }
    this.setState(_.merge(this.state, newState))
  }

  render () {
    let content = (this.state.data) ? this.state.data.md_content : ''
    return (
      <div>
        <h1>Create/Edit a new Note</h1>
        <Editor content={content} handleTextChange={this.handleTextChange} />
        <div>
          <button onClick={this.handlePublish}>Publish</button>
        </div>
        <NotesList />
      </div>
    )
  }
}

export default NewNote
