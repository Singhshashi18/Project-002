import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");
 
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <hr />
          <h2>Even or Odd Checker</h2>
          <input
            type="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder="Enter a number"
          />
          <button
            onClick={() => {
              if (number === "") {
                setResult("Please enter a number.");
                return;
              }
              const num = parseInt(number);
              setResult(num % 2 === 0 ? "Even" : "Odd");
            }}
          >
            Check
          </button>
          <div style={{ marginTop: "10px" }}>
            {result && <b>Result: {result}</b>}
          </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
