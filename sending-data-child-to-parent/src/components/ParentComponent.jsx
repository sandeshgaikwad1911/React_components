/* eslint-disable react/prop-types */
import { useState } from 'react'
import './style.css'


const ParentComponent = () => {

    const [childData, setChildData] = useState("");

    const dataFromChild = (data)=>{
        setChildData(data)
    }

  return (
    <div className='parent'>
        <h2>Parent Component</h2>
        <p>
            React supports unidirection data flow means data is flow in only one direction that is parent to child,
            It does not support data flow on same level.

            so we have complete control over data as we know from where data is coming
            and it less prone to error and easy to debug
        </p>
        <h4>
            but with the help of callback we can send data from child to parent
        </h4>

        <hr />

        {childData && (<p>data from child: {childData}</p>)}

        <ChildComponent sendDatatoParent={dataFromChild}/>
    </div>
  )
}
export default ParentComponent






export const ChildComponent = ({sendDatatoParent}) => {
   
    const [name,setName] = useState("")

    const handleSubmit=()=>{
        sendDatatoParent(name)
        setName("")
    }

    return (
        <div className='child'>
            <h3>Child Component</h3>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleSubmit}>send data to parent</button>
        </div>
    )
}
