import { useState } from 'react'
import './App.css'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
function App() {
  
  const [show, setShow] = useState(false)

  const [open, setOpen] = useState(false)

  return (
    <div className='app'>

      <div className='form'>
        <input type={show ? "text" : "password"} placeholder='enter password'/>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>

      <div className='form'>
        <input type={open ? "text" : "password"} placeholder='enter password'/>
        {
          open ? <AiFillEyeInvisible onClick={()=>setOpen(!open)}/> : <AiFillEye onClick={()=>setOpen(!open)}/>
        }
      </div>

    </div>
  )
}

export default App
