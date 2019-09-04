import React from 'react'

const Person = (props) => {

    return (
      <div>
        <p>{props.name} {props.number}</p>
        <button onClick={props.onClick} value={props.id}>delete</button>
      </div>
    )
  }

  export default Person;  