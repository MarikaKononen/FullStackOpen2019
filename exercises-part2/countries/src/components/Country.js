import React from 'react'

const Country = (props) => {
    let stylesImg = {
        maxHeight: '100px'
    }

    let stylesName = {
        color: 'olive',
    }
    let bg = {
        backgroundColor: '#ebebe0',
        width: '25%',
        padding: '10px', 
    }
    let languagesArray = props.languages
    console.log('languages', languagesArray)

    const rows = () => languagesArray.map( language => 
        <li key={language.name}>
            {language.name}
        </li>
    )
    
    return (
      <div style={bg}>
        <h2 style={stylesName}>{props.name}</h2>
        <p style={stylesName}>Capital:  {props.capital}</p>
        <p style={stylesName}>Population: {props.population}</p>
        <h4 style={stylesName}>Languages</h4>
        <ul>{rows()}</ul>
        <img src={props.flagSrc} alt="flag" style={stylesImg}/>
 
      </div>
    )
  }

  export default Country;  