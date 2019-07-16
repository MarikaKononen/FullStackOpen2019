import React from 'react'

const Country = (props) => {

    return (
      <div>
        <h2>{props.name}</h2>
        <p>{props.capital}</p>
        <p>{props.population}</p>

 
      </div>
    )
  }

  export default Country;  