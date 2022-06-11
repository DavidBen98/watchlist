import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = ({type, isOpen, closeModal}) => {
    const handleModalContainerClick = (e) => e.stopPropagation();

    return ( 
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="btn modal-close" onClick={closeModal}>X</button>    
                <h3>¡The movie has been added to the {type} successfully!</h3>
                <div className="modal__action">
                    {type==="watched"? 
                        <Link to="/watched" className="btn">Go to {type}</Link> : 
                        <Link to="/" className="btn">Go to {type}</Link>
                    }
                    <button className="btn" onClick={closeModal}> Accept </button>
                </div>
            </div>
        </article>
    );
}
 
export default Modal;