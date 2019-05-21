import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Anecdote = (props) =>{
  return(
    <div>
      <p className="anecdote">" {props.anecdote} "</p>
      <p>Has {props.count} votes.</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setAll] = useState( { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })


  const setToSelected = (newValue) => {
    setSelected(newValue)
  }

  const getRandomNum = () => {
    let random = Math.floor(Math.random() * 6)
    console.log('random' , random)
    return random
  }

  const voteAnecdote = () => {
    const copy = { ...points }
    // kasvatetaan olion kentän 2 arvoa yhdellä
    copy[selected] += 1  
    setAll(copy)
    console.log('selected', selected)
    console.log('copy', copy)
  }

  const getTheMostVotesAnecdote = () => {
    let arr = Object.values(points)
    // let min = arr.indexOf(Math.min(...arr))
    let max = arr.indexOf(Math.max(...arr))
    //console.log('min', min)
    console.log('max', max)
    return  max
  }

  return (
    <div className='content'>
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdote = {props.anecdotes[selected]} count= {points[selected]} />
 
      <div className='btns'>
        <Button handleClick={() => voteAnecdote()} text="Vote"/>
        <Button handleClick={() => setToSelected(getRandomNum())} text="Next Anecdote"/>
      </div>
      <h1>Anecdote with the Most Votes</h1>
      <Anecdote anecdote = {props.anecdotes[getTheMostVotesAnecdote()]} count= {points[getTheMostVotesAnecdote()]} />
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)