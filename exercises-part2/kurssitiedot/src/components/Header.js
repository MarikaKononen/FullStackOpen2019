import React from 'react'

const Header = ({name}) => {
  console.log('Header name', name)
    return (
      <>
        <h2>{name}</h2>
        {console.log('header')}
      </>
    )
}

export default Header
