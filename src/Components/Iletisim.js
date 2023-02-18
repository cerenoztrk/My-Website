import React from "react";
//ICONS
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import {MdLocationOn} from 'react-icons/md'

const Iletisim = () => {
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
    </div>
  );
};

export default Iletisim;