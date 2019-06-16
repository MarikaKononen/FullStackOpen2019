import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => { 
    console.log('course course',props.name)
    console.log('course parts',props.content)
    return (
      <>
        <Header name = {props.name} />
        <Content content = {props.content}  />
        
      </>
    )
} 

export default Course

