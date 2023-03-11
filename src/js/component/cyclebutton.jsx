import React from 'react'

const CycleButton = (props) => {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

export default CycleButton