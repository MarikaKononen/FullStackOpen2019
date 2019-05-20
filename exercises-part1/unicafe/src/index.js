import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Statistics = (props) => {
  return(
    <div>
        <h1>Statistiikka</h1>     
        <div className="results">
          <p>Hyvä {props.good}</p>
          <p>Neutraali {props.neutral}</p>
          <p>Huono {props.bad}</p>
        </div>
        <p>Yhteensä { props.total }</p>
        <p>Keskiarvo {props.KA}</p>
        <p>Postiivista {props.positiveFB} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad


  const setToGood = (newValue) => {
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
  }

  const calculateKA = () => {
    let sum  = ( good * 1 ) + ( neutral * 0 ) + ( bad * -1 )  
    return sum/total
  }

  const calculatePositiveFeedbacks = () => {
    let posiviteFeedbackPrc = ( good / total ) * 100
    return posiviteFeedbackPrc
  }

  return (
    <div className="content">
      <h1>Anna palautetta</h1>
      <button onClick={() => setToGood(good + 1)}>Hyvä</button>
      <button onClick={() => setToNeutral(neutral + 1)}>Neutraali</button>
      <button onClick={() => setToBad(bad + 1)}>Huono</button>    

      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  KA={calculateKA()}
                  positiveFB={calculatePositiveFeedbacks()} 
      />       
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
