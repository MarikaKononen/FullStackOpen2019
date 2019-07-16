import React from 'react'
import Country from './Country'

const Countries = (props) => {
    const countries = props.allCountries
    console.log('props.allCountries', props.allCountries)
    console.log('props.listLenght', props)

    const rows = () => countries.map(country =>
        <li key={country.name}>
            {country.name}
        </li>
    )
    const singleCountry = () => countries.map(country =>
        <Country 
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
            <ul>
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