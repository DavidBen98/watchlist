import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {


    return ( 
        <div>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Hola este es otro modal</p>
                <img src="https://placeimg.com/400/400/nature" alt="Animales"></img>
            </Modal>
        </div>
     );
}
 
export default Modals;