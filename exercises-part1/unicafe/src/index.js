import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood = (newValue) => {
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div className="content">
      <h1>Anna palautetta</h1>
      <button onClick={() => setToGood(good + 1)}>Hyvä</button>
      <button onClick={() => setToNeutral(neutral + 1)}>Neutraali</button>
      <button onClick={() => setToBad(bad + 1)}>Huono</button>    

      <h1>Statistiikka</h1> 
      <p>Hyvä {good}</p>
      <p>Neutraali {neutral}</p>
      <p>Huono {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
