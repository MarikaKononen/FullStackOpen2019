import React from 'react'

const Header = ({name}) => {
  console.log('Header name', name)
    return (
      <>
        <h1>{name}</h1>
        {console.log('header')}
      </>
    )
}

export default Header
