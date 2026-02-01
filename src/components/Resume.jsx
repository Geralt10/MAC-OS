import React from 'react'
import MacWindow from '../windows/MacWindow'
import './Resume.scss'
const Resume = () => {
  return (
    <MacWindow>
        <div className='resume'>
            <embed src="/resume.pdf" type="application/pdf" />
        </div>
    </MacWindow>
  )
}

export default Resume
