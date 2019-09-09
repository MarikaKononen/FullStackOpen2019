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

// add person - create  and update person
  const addPerson = event => {
    event.preventDefault()
    const isInArray = persons.filter(person => person.name === newName);
    console.log('isInArray', isInArray.length)
    console.log("isInArray:::", isInArray)
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    if ( isInArray.length === 0 ) {
      
      console.log('button clicked', event.target)
      personService
        .create(personObject)
        .then(returnedPerson =>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          phonebookTmp.push(returnedPerson)
          console.log('debug phonebooktmp', phonebookTmp)
        })

    } else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
      const id = isInArray[0].id
      console.log("id", id)
      
      personService
        .update(id, personObject)
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response.data))
        })
      setNewName('')
      setNewNumber('')
    } else {

      setNewName('')
      setNewNumber('')
    }
     
  }

  const removePerson = event => {
    console.log("in removePersons")
    const id = parseInt(event.target.value)
    const person = persons.find(p => p.id === id)
    console.log("remove id", id, "removed: ", person.name)
    if (window.confirm(`Do you really want to delete '${person.name}'?`)) { 
      personService
        .remove(id)
        .then(res =>{
          console.log("returnedPersons", res)
          const newPersonsArray = persons.filter(p => p.id !== id)
          setPersons(newPersonsArray)
          phonebookTmp = newPersonsArray
          console.log("phonebook tmp", phonebookTmp)
          console.log("persons", persons)          

        })
        .catch(error => {
          alert(
            `the person '${person.name}' cannot be deleted from the server! ERRORR:: ${error}`
          )
        })

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

      <h3>Add a new or update existing one</h3>
      <PersonForm onSubmit={addPerson}
                  valueName={newName}
                  onChangeName={handleNameChange}
                  valueNumber={newNumber}
                  onChangeNumber={handleNumberChange}


      />
      <h3>Numbers</h3>
      <Persons allPersons = {persons} onClick={removePerson} />
    </div>
  )

}


export default App;
