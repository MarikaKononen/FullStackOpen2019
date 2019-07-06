import './App.css';
import React, { useState } from 'react'
import Person from './components/Person'

const initialState = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]


const App = () => {
  const [ persons, setPersons] = useState(initialState) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      name={person.name}
      number={person.number}
    />
  )

  const addPerson = (event) => {
    event.preventDefault()
    const isInArray = persons.filter(person => person.name === newName);
    console.log('isInArray', isInArray.length)

    if ( isInArray.length === 0 ) {
      
      console.log('button clicked', event.target)
      const nameObject = {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')

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
      console.log("setPersons(initialState)")
      setPersons(initialState)
    } else {
      let filteredArray = filterNames( persons, event.target.value)
      console.log('debug:: filteredArray', filteredArray)
      setPersons(filteredArray)
    }
  }

  const filterNames = (array, letter) => {
    return array.filter(person => person.name.toLowerCase().startsWith(letter.toLowerCase()) === true )
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with: <input value={newFilter}
                                    onChange={handleFilterChange}
                              />
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                       onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input value={newNumber}
                         onChange={handleNumberChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {rows()}
      </div>
    </div>
  )

}


export default App;
