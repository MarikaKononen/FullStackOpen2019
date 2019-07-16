import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'
import Country from './components/Country'



const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [filteredCountries, setFilteredCountries] = useState([])
  const [ newFilter, setNewFilter ] = useState('')


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log('debug: data', response.data)
      })
  }
  
  useEffect(hook, [])

  const resetCountriesList = () => {
    console.log('resetting list')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log('debug: data', response.data)
      })
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(event.target.value)

    if ( event.target.value === '' ){
      console.log('debug :: empty filter')
      resetCountriesList()
    } else {
      console.log('debug :: full filter')
      setFilteredCountries(filterCountries( countries, event.target.value))

    }
  }


  const filterCountries = (array, letter) => {
    return array.filter(country => country.name.toLowerCase().startsWith(letter.toLowerCase()) === true )
  }

  return (
    <div>
      <h2>Find Countries</h2>
      <Filter value={newFilter}
              onChange={handleFilterChange}
              
      />
  
      {filteredCountries.length < 11 &&          
          <Countries allCountries = {filteredCountries} />
      }
      {filteredCountries.length > 10 &&
          <p>Too many matches {filteredCountries.length}, specify another filter.</p>
      }
      
      
    </div>
  )

}


export default App;
