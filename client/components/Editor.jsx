import React from 'react'

export default props => (
  <div className='level'>
    <div className='level-item '>
      <div className='box editor'>
        <label className='label'>Note Content</label>
        <p className='control'>
          <textarea className='textarea' style={{height: '60vh'}} value={props.content} onChange={props.handleTextChange} />
        </p>
      </div>
    </div>
  </div>
)
