import React from 'react'

const Header = () => {
    const headerStyle = {
      color: 'white',
      fontStyle: 'italic',
      fontSize: 16,
      background: 'teal', 
      height: 50,  
      paddingLeft: 10,
      paddingBottom: 15
    }
  
    return (
      <div style={headerStyle}>
        <br/>
        <p>Phonebook App by <strong>Code for my Life</strong> - Created with React</p>
      </div>
    )
  }

  export default Header