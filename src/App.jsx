import { useState } from 'react';
import './App.css'

export default function App() {

  const [length, setLength] = useState(10)
  const [checkboxData, setCheckboxData] = useState(
    [
      { title: "Include Upperase Letters", state: false },
      { title: "Include Lowercase Letters", state: false },
      { title: "Include Numbers", state: false },
      { title: "Include Symbols", state: false }
    ]
  )

    const handleCheckboxChange = (index) => {
      const updatedCheckboxData = [...checkboxData]
      updatedCheckboxData[index].state = !updatedCheckboxData[index].state
      setCheckboxData(updatedCheckboxData)
    }

  return (
      <div className="container">
        <div className="header">
          <div className="title">K6bd@ay^bo67</div>
          <button className="copy-btn" onClick={() => {}}>Copy</button>
        </div>
        <div className="character-length">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input 
          type="range" 
          min="8"
          max="25"
          value={length}
          onChange={(event) => setLength(event.target.value)} 
          />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return <div key={index}>
              <input type="checkbox" checked={checkbox.state} onChange={() => handleCheckboxChange(index)} />
              <label>{checkbox.title}</label>
            </div>
          })}
        </div>
        <button className="generate-btn">generate Button</button>
      </div>
  )
}