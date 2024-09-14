import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from "./pages/questionPage.tsx"
import ParticlesComponent from './ConstellationBg.tsx';

function App() {
  const [count, setCount] = useState(0)

  // Used to Clear content (currently used by Alex to quickly switch from the default
  // screen to the question page)
  const [isContentVisible, setContentVisible] = useState(false);
  const handleDeleteContent = () => {
    isContentVisible === true ? setContentVisible(false) : setContentVisible(true); 
  };


  return (
    <>
      {/* Will disappear after button press, remove after start page has been made */}
      {!isContentVisible && (
        <>
        <ParticlesComponent /> {/* Single particle effect */}
        <div className="diagonal-bg"></div>
        <h1 className="title">COSMIC CODE SIGNS</h1>
        <p className="subtitle">What kind of coder are you?</p>
        <button className="arrow-btn" onClick={handleDeleteContent}>
          BEGIN TEST
        </button>
        <div className="particle-container"></div>
        </>
      )}

      {/* Conditionally render the Page component on button press */}
      {isContentVisible && (
        <div>
          <Page />
          <ParticlesComponent />
        </div>
        
      )}
      
    </>
  )
}

export default App
