import React, {useRef} from "react";
//ICONS
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import {MdLocationOn} from 'react-icons/md'
import emailjs from '@emailjs/browser';

const Contact  = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vzsy72x', 'template_d4jms4t', form.current, 'AKbBq1ji8pd6eaOsl')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-container" id="contact">
      <h1 >CONTACT </h1>
     
      <div className="contact-div">
        <div className="contact-info">
        <p className="location"><MdLocationOn size={'20px'}/> Istanbul/Turkey</p>
        <p className="mail">
          <AiOutlineMail size={'20px'}/> cerenoztrk69@gmail.com
        </p>
        </div>
        <div className="social">
        <a href="https://www.linkedin.com/in/ceren-%C3%B6zt%C3%BCrk-1514721b1/"  target="_blank"><AiFillLinkedin className="social-icons"/>in.com/cerenoztrk</a>
        <a href="https://github.com/cerenoztrk" target="_blank"><AiFillGithub className="social-icons"/>github.com/cerenoztrk</a>
        <a href="https://www.instagram.com/crnnoztrrk/" target="_blank" ><AiOutlineInstagram className="social-icons"/>instagram.com/crnnoztrrk</a>
        </div>
      </div>
        
        <form ref={form} onSubmit={sendEmail}>
        <h3>If you want to see my resume, just send a message. </h3>
        <input required autoComplete="off" type="text" name="user_name" placeholder="Enter your name" />
        <input required autoComplete="off" type="email" name="user_email" placeholder="Enter your email"/>
        <textarea required autoComplete="off" name="message" placeholder="Enter your message" />
        <input type="submit" value="Send" />
        </form>
      
    </div>
  );
};

export default Contact ;