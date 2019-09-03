import './App.css';
import personService from './services/persons'
import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

let phonebookTmp = []

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')


  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        phonebookTmp = initialPersons
      })
  }
  
  useEffect(hook, [])
  
  // show persons - getAll
  const showPersons = () => {
    console.log('effect')
    personService
      .getAll()
      .then(persons => setPersons(persons))
  }

// add person - create 
  const addPerson = (event) => {
    event.preventDefault()
    const isInArray = persons.filter(person => person.name === newName);
    console.log('isInArray', isInArray.length)

    if ( isInArray.length === 0 ) {
      
      console.log('button clicked', event.target)
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson =>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          phonebookTmp.push(returnedPerson)
          console.log('debug phonebooktmp', phonebookTmp)
        })

    } else {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
     
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(event.target.value)

    if ( event.target.value === '' ){
      showPersons()
    } else {
      let filteredArray = filterNames( phonebookTmp, event.target.value)
      console.log('debug filtered', filteredArray)
      setPersons(filteredArray)
    }
   
  }
  const handleOnKeyUp = (event) => {
    console.log("press button", event.key)
    
   if ( event.key === 'Backspace'){
      let filteredArray = filterNames( phonebookTmp, event.target.value)
      console.log('debug onkeyup', filteredArray)
      setPersons(filteredArray)
    }  
  }


  const filterNames = (array, letter) => {
    return array.filter(person => person.name.toLowerCase().startsWith(letter.toLowerCase()) === true )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter}
              onChange={handleFilterChange}
              onKeyUp={handleOnKeyUp}
      />

      <h3>Add a new</h3>
      <PersonForm onSubmit={addPerson}
                  valueName={newName}
                  onChangeName={handleNameChange}
                  valueNumber={newNumber}
                  onChangeNumber={handleNumberChange}

      />
      <h3>Numbers</h3>
      <Persons allPersons = {persons} />
    </div>
  )

}


export default App;
