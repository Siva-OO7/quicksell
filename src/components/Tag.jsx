import React from 'react';
import '../components/styles/Tag.css'

function Tag({tag}) {
  return (
    <div className='card-tag'>
        <span></span>
        <div>{tag}</div>
    </div>
  )
}

export default Tag