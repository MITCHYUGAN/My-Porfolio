import React from 'react'
import ModalCss from './Modal.module.css';

const modal = ModalCss.modal

const Modal = () =>{
    return(
        <div className={modal}>
            <h1>Message Sent <span role="img" aria-label="A waving emoji">👌</span></h1>
            <p>I will get back to you through Gmail</p>
        </div>
    )
}

export default Modal