import React from 'react'
import Country from './Country'

const ShowButton = (props) => {
    console.log("showsingle, props => ", props.country)

    return (
        <button onClick={props.showSingle}  value={props.country}>show
        </button>
    )
  }

export default ShowButton;  