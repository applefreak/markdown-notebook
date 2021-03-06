import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotesList from '../components/NotesList.jsx'
import Viewer from '../components/Viewer.jsx'
import fetch from 'axios'

class ViewNote extends Component {
  constructor () {
    super()

    this.state = {data: {md_content: 'loading...'}}
  }

  componentDidMount () {
    let { params } = this.props.match
    fetch.get(`/api/${params.uuid}`)
    .then(res => {
      console.log(res.data)
      this.setState({data: res.data})
    })
  }

  render () {
    let { params } = this.props.match
    let { data } = this.state
    return (
      <div>
        <h1 className='title has-text-centered'>{params.uuid}</h1>
        <Viewer content={data} />
        <NotesList />
      </div>
    )
  }
}

export default ViewNote
