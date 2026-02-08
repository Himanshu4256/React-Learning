import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  // let counter = 15;

  let [counter, setCounter] = useState(15)

  const addValue = () => {
  console.log("clicked", counter);
  counter = counter + 1
  setCounter(counter)
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  } 

  return (
    <>
    <h1>React Wale</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br></br>
    <button onClick={removeValue}disabled={counter === 0}>remove value: {counter}</button>
    <p>footer: {counter}</p>
</>
  );
}

export default App;
