import './App.css';
import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Marika' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      name={person.name}
    />
  )

  const addPerson = (event) => {
    event.preventDefault()
    const isInArray = persons.filter(person => person.name === newName);
    console.log('isInArray', isInArray.length)

    if ( isInArray.length === 0 ) {
      
      console.log('button clicked', event.target)
      const nameObject = {
        name: newName
      }
      
      setPersons(persons.concat(nameObject))
      setNewName('')
    } else {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
     
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                       onChange={handleNameChange}
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
