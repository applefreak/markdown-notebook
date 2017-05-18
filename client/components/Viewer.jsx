import React from 'react'
import Markdown from 'react-markdown'
import moment from 'moment'

export default props => (
  <div>
    <div className='level'>
      <p className='level-item'>{moment(props.content.last_modified ? props.content.last_modified : props.content.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
    <div className='level'>
      <div className='level-item'>
        <div className='single-note box'>
          <Markdown className='content' source={props.content.md_content} />
        </div>
      </div>
    </div>
  </div>
)
