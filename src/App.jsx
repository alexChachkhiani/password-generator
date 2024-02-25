import './App.css'

export default function App() {

  const checkboxData = [
    { title: "Include Upperase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ];

  return (
      <div className="container">
        <div className="header">
          <div className="title">K6bd@ay^bo67</div>
          <button className="copy-btn" onClick={() => {}}>Copy</button>
        </div>
        <div className="character-length">
          <span>
            <label>Character Length</label>
            <label>4</label>
          </span>
          <input 
          type="range" 
          min="5"
          max="20"
          // value={}
          // onChange={} 
          />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return <div key={index}>
              <input type="checkbox" checked={checkbox.state} />
              <label>{checkbox.title}</label>
            </div>
          })}
        </div>
        <button className="generate-btn">generate Button</button>
      </div>
  )
}