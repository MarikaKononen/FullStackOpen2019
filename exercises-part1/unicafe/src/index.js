import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Statistics = (props) => {
        
  if (props.good === 0 && props.neutral === 0 && props.bad === 0 ) { 
    return(
      <div>
        <h1>Statistics</h1>  
        <p>No feedback given!</p>
      </div>
    )
  } 
  return (
    <div>
      <h1>Statistics</h1>  
      <div className="results">
        <p>Good {props.good}</p>
        <p>Neutral {props.neutral}</p>
         <p>Bad {props.bad}</p>
      </div>
      <p>Total { props.total }</p>
      <p>Average {props.average}</p>
      <p>Positive {props.positiveFB} %</p>
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

  const calculateAverage = () => {
    let sum  = ( good * 1 ) + ( neutral * 0 ) + ( bad * -1 )  
    return sum/total
  }

  const calculatePositiveFeedbacks = () => {
    let posiviteFeedbackPrc = ( good / total ) * 100
    return posiviteFeedbackPrc
  }

  return (
    <div className="content">
      <h1>Give Feedback</h1>
      <button onClick={() => setToGood(good + 1)}>Good</button>
      <button onClick={() => setToNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setToBad(bad + 1)}>Bad</button>    

      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  average={calculateAverage()}
                  positiveFB={calculatePositiveFeedbacks()} 
      />       
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)