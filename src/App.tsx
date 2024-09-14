import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Page from "./pages/questionPage.tsx"

function App() {
  const [count, setCount] = useState(0)

  // Used to Clear content
  const [isContentVisible, setContentVisible] = useState(false);
  const handleDeleteContent = () => {
    isContentVisible === true ? setContentVisible(false) : setContentVisible(true); 
  };


  return (
    <>
      {!isContentVisible && (
        <div className="card">
          <div>
        <a href="https://vitejs.dev" target="_blank">
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={handleDeleteContent}>
        DELETE
      </button>
        </div>
      )}

      {/* Conditionally render the Page component */}
      {isContentVisible && (
        <Page />
      )}
      
    </>
  )
}

export default App
