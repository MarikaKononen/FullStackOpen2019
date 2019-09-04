import React from 'react'
import Person from './Person'

const rows = (persons, onClick) => persons.map(person =>
    <Person
      key={person.id}
      id= {person.id}
      name={person.name}
      number={person.number}
      onClick = {onClick}
    />
  )


const Persons = (props) => {
    return (
      <div>
        {rows(props.allPersons, props.onClick)}
      </div>
    )
  }

  export default Persons;  