import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactCss from "./Contact.module.css";
import Modal from "../Modal/Modal";

const contactWrapper = ContactCss.contactWrapper;
const contactheader = ContactCss.contactheader;
const forms = ContactCss.forms;
const submitformBtn = ContactCss.submitformBtn;


const contactHeadingText = "<> Contact Me </>";
const submitBtnClasses = `button ${submitformBtn}`

const Contact = () => {
  const form = useRef();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [modal, setModal] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j8ptx45",
        "template_t6uua3d",
        form.current,
        "yI3tBHjy19fOWaWlv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setFullName('');
      setEmail('');
      setMessage('');
  };

  return (
    <div className={contactWrapper} >
      <div className={contactheader}>
        <h1>{contactHeadingText}</h1>
        <p>
          I'd love if you reached out to me. Even if it's just to say "Hi!".
          Don't hesitate! Drop me a line and I'll get back to you ASAP!
        </p>
      </div>

      <form ref={form} className={forms} onSubmit={sendEmail} id="contact">
        <label>Name</label>
        <input placeholder="Enter Your Name" type="text" name="user_name"  
         value={fullName}
         onChange={event => setFullName(event.target.value)}
        />
        <label>Email</label>
        <input placeholder="Enter Your Email" type="email" name="user_email" 
         value={email}
         onChange={event => setEmail(event.target.value)}
        />
        <label>Message</label>
        <textarea placeholder="Enter Your Message" name="message"
        value={message}
        onChange={event => setMessage(event.target.value)}
        />
        <input type="submit" className={submitBtnClasses} value="Send" onClick={() => {
         if (fullName === "" || email === "" || message === "") {
          // var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          alert("Please enter your Name, Email, and Message")
         } else{
           setModal(true)
         }
          setTimeout(() => {
            setModal(false);
          }, 5000);
        }}/>
      </form>
        {
          modal &&  <Modal />
        }
        <div className="mini-footer">
          <p>© Copyright 2023. Made by Mitchyugan</p>
        </div>
    </div>
  );
};

export default Contact;
