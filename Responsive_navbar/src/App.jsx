import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [mobileView, setMobileView] = useState(false);

  const menuRef = useRef();
  const iconRef = useRef();

  const closeLeftBar = (e) => {
    console.log('iconRef', e.target === iconRef.current);
    console.log('menuRef', e.target === menuRef.current);

    // if(e.target != menuRef.current){
    //   setMobileView(false)
    // }
  };

  useEffect(() => {
    window.addEventListener("click", closeLeftBar);
    return () => {
      window.removeEventListener("click", closeLeftBar);
    };
  }, []);

  return (
    <>
      <nav>
        <div>Logo</div>
        <ul className={mobileView ? "menu mobile-menu" : "menu"} ref={menuRef}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">register</a>
          </li>
        </ul>
        <div className="mobileIcon" onClick={() => setMobileView(!mobileView)} > 
            {mobileView ? <AiOutlineClose /> : <RxHamburgerMenu />} 
        </div>
      </nav>
    </>
  );
}

export default App;

/* 
    1. by default .mobileIcon{
      display: nonw
    }

  2.  on small screen we make it display: block and menus out of  screen  see.. css
        @media screen and (max-width: 768px) {
          .mobileIcon{
              display: block;
          }
        }

*/
