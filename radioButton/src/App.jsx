import { useState } from 'react';
import './App.css'

function App() {

  const options = ["Cricket", "Football", "Kabbadi", "Swimming"];
  const days = ["Weekdays", "Weekend"]

  const [option, setOption] = useState("")
  const [day, setDay] = useState("")
  console.log('option',option)
  console.log('day', day)

  return (
    <div className='app'>
        <div className="radio">
          {
            options.map((option,i)=>(
              <div key={i} className='option'>
                <input type="radio" id="options" name='options' value={option} onChange={(e)=>setOption(e.target.value)}/>
                <label htmlFor="options">{option}</label>
              </div>
            ))
          }
          <br />
          {
            days.map((day, i)=>(
              <div key={i} className='day'>
                <input type="radio" id='day' name='day' value={day} onChange={(e)=>setDay(e.target.value)}/>
                <label htmlFor="day">{day}</label>
              </div>
            ))
          }
          <br />
          <div>
            <h4>{`lets play :- ${option} on :- ${day}`}</h4>
          </div>
        </div>
    </div>
  )
}

export default App
