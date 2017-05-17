import React from 'react'

export default props => (
  <textarea value={props.content} onChange={props.handleTextChange} />
)
