
import { useState } from 'react'
import './App.css'

function App() {
  
  const Links = [
    {id: 1, name: 'Html'},
    {id: 2, name: "CSS"},
    {id: 3, name: "Javascript"}
  ]

  const [toggleId, setToggleId] = useState(1)

  const toggleTab = (id)=>{
    // console.log(id)
    setToggleId(id)
  }

  return (
    <div className='app'>
      <ul className='tabs'>
          {
            Links.map((link)=>(
              <li key={link.id} className={link.id === toggleId ? 'tab_itmes active': 'tab_items'} onClick={()=>toggleTab(link.id)}>{link.name}</li>
            ))
          }
      </ul>
      <div className={toggleId === 1 ? 'show_content' : 'content'}>
        <h1>Html</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, culpa?</p>
      </div>
      <div className={toggleId === 2 ? 'show_content' : 'content'}>
        <h1>Css</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime?</p>
      </div>
      <div className={toggleId === 3 ? 'show_content' : 'content'}>
        <h1>JavaScript</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</p>
      </div>
    </div>
  )
}

export default App
