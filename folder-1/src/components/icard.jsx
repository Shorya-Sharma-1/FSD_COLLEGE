import React from 'react'

function ICard(props) {
  return (
    <div style={{Border:'5px solid red'}}>
      <h2>College:{props.college}</h2>
      <h2>Roll:{props.roll}</h2>
      <h2>Name:{props.branch}</h2>
      </div>
  )
}

export default ICard