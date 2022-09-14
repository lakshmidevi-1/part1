import { useState } from 'react'

const Button = ({ onClick, body }) => <button onClick={onClick}>{body}</button>;

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const HandleButton = (button) => () => {
    console.log(button);
    if (button === 'good') {
      setGood(good + 1);
    } else if (button === 'bad') {
      setBad(bad + 1);
    } else if (button === 'neutral') {
      setNeutral(neutral + 1);
    }
  };
  const Statistics = ({ good, neutral, bad }) => (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  );
  return (
    <div>
      <Button onClick={HandleButton('good')} body={'good'} />
        <Button onClick={HandleButton('neutral')} body={'neutral'} />
        <Button onClick={HandleButton('bad')} body={'bad'} />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App