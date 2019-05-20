import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}
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
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
      </div>
      <Statistic text="Total" value={props.total} />
      <Statistic text="Average" value={props.average} />
      <Statistic text="Positive" value={props.positiveFB} />
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
      <Button handleClick={() => setToGood(good + 1)} text="Good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="Bad"/>   
    

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