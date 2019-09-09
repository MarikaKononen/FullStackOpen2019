import React from 'react'

const Footer = () => {
    const footerStyle = {
      color: 'white',
      fontStyle: 'italic',
      fontSize: 16,
      background: 'teal', 
      height: 100, 
      textAlign: 'center',
      marginTop: 50
    }
  
    return (
      <div style={footerStyle}>
        <br />
        <em>Phonebook app by <strong>Code for my Life</strong></em>
      </div>
    )
  }

  export default Footer