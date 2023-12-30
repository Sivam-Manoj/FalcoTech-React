import "./Contact.css"
import Lottie from "lottie-react"
import contact from "./contact.json"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
//import { send } from "vite";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8l26iui', 'template_0us55gb', form.current, 'u5sDcfCYS5LvRpXAh')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form className="display-contact" id="contact" ref={form} onSubmit={sendEmail}>
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-form" data-aos="fade-left">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Full Name" name="user_name" autoComplete="off" autoCorrect="false"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email"  placeholder="ex:user@gmail.com" autoComplete="off" />
            <input type="textarea"  name="message" id="msg" placeholder="Enter Your Message"
            rows="4" // Specify the number of visible text lines
            cols="50" // Specify the visible width of the textarea
            />
            <button onSubmit={()=>{sendEmail()}} value="send">Send</button>
        </div>
        <Lottie animationData={contact} className="contact-animation" data-aos="fade-right"/>    
    </form>
  )
}

export default Contact