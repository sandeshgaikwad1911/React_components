import "./App.css";
import { useState } from "react";
import {createPortal} from 'react-dom'
import Modal from "./components/Modal";
function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">

      <div className="btn-container">
        <button className="btn" onClick={()=>setIsModalOpen(!isModalOpen)}>open modal</button>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ex necessitatibus ullam dolore cumque fugiat. Cupiditate officia minus illo, a ipsam blanditiis vitae amet magni, quae iusto unde explicabo pariatur. Quasi dolorem ex natus odit non alias itaque quis amet tempora deleniti modi nisi ad quidem voluptate in commodi nobis eum, odio laudantium aspernatur? Laudantium numquam accusamus facilis officiis perspiciatis, veritatis quidem neque rem labore, expedita, iusto voluptatum modi! Ipsa, explicabo tempore. Eos doloribus non saepe repellendus rerum! Quis autem, eos, quo harum et consectetur, architecto quam laboriosam molestiae vero quasi nisi culpa porro? Ipsam laborum officiis debitis necessitatibus quibusdam?
      </div>

      {isModalOpen && (
        createPortal(
          <Modal setIsModalOpen={setIsModalOpen}>
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            fuga!
          </p>
        </Modal>,document.body
        )
      )}

    </div>
  );
}

export default App;

/* 
 [
    Modals are used to display pop-up or overlay components and that appear on top of main content.
    since it's appear on top of main content so, it's best practice to make it sibling of root element and not child of other component.
 ]

   => import {createPortal} from 'react-dom'

  createPortal(<Modal>,document.body)       // document.body    is second parameter

  it takes Modal out of actual position,  and places as member of document.body or root element

  we can see inside Element. Modal is no more part of App.jsx, now it's sibling of root element


*/
