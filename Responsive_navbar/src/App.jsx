import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./App.css";

function App() {
  
  const [mobileView, setMobileView] = useState(false);

  const Links = [
    {
      id: 1,
      link: "#",
      title: "Home"
    },
    {
      id: 2,
      link: "#",
      title: "About"
    },
    {
      id: 3,
      link: "#",
      title: "Contact"
    },
    {
      id: 4,
      link: "#",
      title: "Register"
    }
  ]

  
  return (
    <div className="app">
      <nav>
        <div>Logo</div>
        <ul className={mobileView ? "menu mobile-menu" : "menu"}>
         {
          Links.map((link)=>(
            <li key={link.id} onClick={()=>setMobileView(false)}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))
         }
        </ul>
        <div className="mobileIcon" onClick={() => setMobileView(!mobileView)} > 
            {mobileView ? <AiOutlineClose /> : <RxHamburgerMenu />} 
        </div>
      </nav>

      <div style={{height: "1000px"}}>
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae voluptates in ducimus voluptatum deserunt ullam aliquam tenetur necessitatibus. Adipisci odio velit ratione ipsa delectus ex excepturi molestiae qui accusantium alias blanditiis eligendi praesentium, explicabo amet eius eaque autem! Veniam quam inventore possimus expedita illo pariatur culpa ipsam eius consequuntur omnis, modi dolorem! Perferendis veritatis a sunt earum minus voluptates enim quo quaerat consectetur vero labore laudantium laboriosam aspernatur, distinctio debitis ratione quos veniam pariatur tempora tenetur excepturi! Accusamus temporibus recusandae voluptatem commodi assumenda dolor possimus labore pariatur eaque, id sint, nihil, illo voluptatibus tenetur facere fuga unde eum? Asperiores.</p>
      </div>

    </div>
  );
}

export default App;

/* 
    1. by default .mobileIcon{
      display: none
    }

  2.  on small screen we make it display: block and menus out of  screen  see.. css
        @media screen and (max-width: 768px) {
          .mobileIcon{
              display: block;
          }
        }

*/
