import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter ] = useState(0);

  // let counter =5;
 const addValue = () => {
  if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
    console.log("Counter value:", counter);
  }
  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
    console.log("Counter value:", counter);
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value : { counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
