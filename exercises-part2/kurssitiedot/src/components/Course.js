import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => { 
    console.log('course course',course)
    console.log('course parts',course.parts)
    return (
      <>
        <Header name = {course.name} />
        <Content content = {course.parts}  />
        
      </>
    )
} 

export default Course

