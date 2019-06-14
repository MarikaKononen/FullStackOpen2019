import React from 'react'
import Part from './Part'

const Content = ({content}) => { 
    console.log('content parts',content)
    const parts = () => content.map(part =>
      <Part 
        key={part.id}
        name={part.name}
        exercise = {part.exercises}
      />
    )
    
  
    return (
      <div>
       {parts()}
        
      </div>
    )
} 

export default Content