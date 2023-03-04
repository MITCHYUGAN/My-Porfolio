import React from 'react'
import ModalCss from './Modal.module.css';

const modal = ModalCss.modal

const Modal = () =>{
    return(
        <div className={modal}>
            <h1>Message Sent <span role="img" aria-label="A waving emoji">👌</span></h1>
        </div>
    )
}

export default Modal