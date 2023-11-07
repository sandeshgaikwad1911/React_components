import { useState } from 'react'
import './App.css'

function App() {
  
  const Tabs = [
    {id: 1, name: 'Html'},
    {id: 2, name: "CSS"},
    {id: 3, name: "Javascript"}
  ]

  const TabContent = [
    {id: 1, title: "Html", content: "HTML is the standard markup language for Web pages."},
    {id: 2, title: "Css", content: "CSS is the language we use to style an HTML document."},
    {id: 3, title: "Javascript", content: "JavaScript is the programming language of the Web."}
  ]

  const [tabId, setTabId] = useState(1)

  const toggleTab = (id)=>{
    // console.log(id)
    setTabId(id)
  }

  return (
    <div className='app'>
      <ul className='tabs'>
          {
            Tabs.map((tab)=>(
              <li key={tab.id} className={tab.id === tabId ? 'tab_itmes activeTab' : 'tab_items'} onClick={()=>toggleTab(tab.id)}>{tab.name}</li>
            ))
          }
      </ul>
      
      {/* <div className={tabId === 1 ? 'show_content' : 'hide_content'}>
        <h1>Html</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, culpa?</p>
      </div>
      <div className={tabId === 2 ? 'show_content' : 'hide_content'}>
        <h1>Css</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime?</p>
      </div>
      <div className={tabId === 3 ? 'show_content' : 'hide_content'}>
        <h1>JavaScript</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</p>
      </div> */}

      {
        TabContent.filter((content)=>content.id === tabId).map((item)=>(
          <div key={item.id} className='show_content'>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))
      }

    </div>
  )
}

export default App
