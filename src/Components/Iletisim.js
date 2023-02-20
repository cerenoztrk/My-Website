import React, {useRef} from "react";
//ICONS
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import {MdLocationOn} from 'react-icons/md'
import emailjs from '@emailjs/browser';

const Iletisim = () => {
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
    <div className="contact-container" id="iletisim">
      <h1 >İLETİŞİM</h1>
     
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
        <h3>CV' mi görüntülemek isterseniz mesaj atmanız yeterli </h3>
        <label>Adınız</label>
        <input required autoComplete="off" type="text" name="user_name" />
        <label>Email Adresiniz</label>
        <input required autoComplete="off" type="email" name="user_email" />
        <label>Mesajınız</label>
        <textarea required autoComplete="off" name="message" />
        <input type="submit" value="Gönder" />
        </form>
      
    </div>
  );
};

export default Iletisim;