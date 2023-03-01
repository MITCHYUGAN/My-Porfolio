import ModalCss from './Modal.module.css';

const modal = ModalCss.modal

const Modal = () =>{
    return(
        <div className={modal}>
            <h1>Message Sent 👌</h1>
        </div>
    )
}

export default Modal