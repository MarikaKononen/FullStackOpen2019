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
    const calculateTotal= () => {
      const totalExercises = content.map(part => part.exercises)
      const total = 
      totalExercises.reduce( (s, p) => s + p )
      return total  
    }  
  
    return (
      <div>
       {parts()}
       <p><b>Total of {calculateTotal()} exercises</b></p>
        
      </div>
    )
} 

export default Content