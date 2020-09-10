import React from 'react'

export default function Modal(props) {
  return (
    <div id="modal">
      
      <button onClick={props.closeModal}>Close</button>
    </div>
  )
}
