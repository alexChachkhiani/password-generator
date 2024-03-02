import { useState } from 'react';
import './App.css'
import usePasswordGenerator from './hooks/usePasswordGenerator';

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

    const {password, errorMesage, generatePassword} = usePasswordGenerator()

  return (
      <div className="container">
        {password && <div className="header">
          <div className="title">{password}</div>
          <button className="copy-btn" onClick={() => {}}>Copy</button>
        </div>}
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

        {errorMesage && <div className="error-message">{errorMesage}</div>}

        <button className="generate-btn" onClick={() => generatePassword(checkboxData, length)}>Generate Button</button>
      </div>
  )
}