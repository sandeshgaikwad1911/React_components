import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const menus = ["Settings", "Profile", "Logout"];

  const div1Ref = useRef();
  const div2Ref = useRef();

  window.addEventListener('click', (e)=>{
    console.log(e.target === div2Ref.current)

    //  when click outside... false
    // when click div2Ref ... true
    // when click div1Ref... false
    
  })

  const handleClick = (e) => {
    console.log('e', e.target === div2Ref.current)
    if (e.target !== div2Ref.current && e.target !== div1Ref.current) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [div1Ref, div2Ref]);

  return (
    <div className="app">
      <div>
        <div className="title" onClick={() => setOpen(!open)} ref={div1Ref}>
          {open ? "hide_menus" : "show_menus"}
        </div>

        <div className="menu_container">
          {open && (
            <div className="menus" ref={div2Ref} style={{padding: '50px'}}>
              <ul>
                {menus.map((menu, index) => (
                  <li key={index}>{menu}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
