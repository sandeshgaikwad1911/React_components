/* eslint-disable react/prop-types */
import "./modal.css";

const Modal = ({ children, setIsModalOpen}) => {

    const clickOutsideToClose = (e)=>{
        if(e.target.className === 'modal-container'){
            setIsModalOpen(false)
        }
    }

  return ( 
      <div className="modal-container" onClick={clickOutsideToClose}>
        <div className="modal">
          <div className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </div>
          {children}
        </div>
      </div>
  );
};

export default Modal;

/* 
    [.modal-container must cover eniter screen]
    
    .modal-container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

*/

/* 
    even if we click on [.modal]... it closes [.modal-container]
    so, we have 
        if(e.target.className === 'modal-container'){
            setIsModalOpen(false)
        }
*/
