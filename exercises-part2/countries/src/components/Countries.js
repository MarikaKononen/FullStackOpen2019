import React from 'react'
import Country from './Country'
import ShowButton from './ShowButton'

const Countries = (props) => {
    const countries = props.allCountries
    const showSingle = props.showSingle
    console.log('props.allCountries', props.allCountries)
    console.log('props.listLenght', props)
    let ul = {
        listStyleType: 'none'
    }
    

    const rows = () => countries.map(country =>
        <li key={country.name}>
            {country.name}
            {console.log('singlecountry:: ',country )}
            <ShowButton 
                 showSingle = {showSingle}
                 country = {country.name}
            /> 
        </li>
    )

    const singleCountry = () => countries.map(country =>
        <Country key={country.name}
                name={country.name}
                capital={country.capital}
                population={country.population}
                languages={country.languages}
                flagSrc={country.flag}
        />
    )

    return (
      <div>
        {props.allCountries.length > 1 &&
            
            <ul style={ul}>
                {rows()}
            </ul>
        }
        {props.allCountries.length === 1 &&
            <div>
                {singleCountry()}
            </div>
        }
 
      </div>
    )
  }


export default Countries;  