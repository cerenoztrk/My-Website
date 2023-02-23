import React, { useRef } from "react";
//ICONS
import {
  AiOutlineMail,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzsy72x",
        "template_d4jms4t",
        form.current,
        "AKbBq1ji8pd6eaOsl"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <div>
        <h1 className="section-header">CONTACT</h1>
        <div className="contact-wrapper">
          <form ref={form}
            id="contact-form"
            className="form-horizontal"
            role="form"
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="user_name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="user_email"
                required
              />
            </div>
            <textarea
              className="form-control"
              rows={10}
              placeholder="MESSAGE"
              name="message"
              required
              
            />
            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane" />
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <span className="contact-text place">
                  <MdLocationOn className="contact-icons" />
                  Istanbul, Turkey
                </span>
              </li>
              <li className="list-item">
                <a
                  className="contact-text phone"
                  href="tel:1-212-555-5555"
                  title="Give me a call"
                >
                  <BsTelephone className="contact-icons" />
                  (538) 822-7934
                </a>
              </li>
              <li className="list-item">
                <a
                  className="contact-text gmail"
                  href="mailto:#"
                  title="Send me an email"
                >
                  <AiOutlineMail className="contact-icons" />
                  cerenoztrk69@gmail.com
                </a>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/ceren-%C3%B6zt%C3%BCrk-1514721b1/"
                  target="_blank"
                >
                  <AiFillLinkedin className="social-icons" />

                  {/* <i className="fa fa-github" aria-hidden="true" /> */}
                </a>
              </li>
              <li>
                <a href="https://github.com/cerenoztrk" target="_blank">
                  <AiFillGithub className="contact-icon" />
                  {/* <i className="fa fa-twitter" aria-hidden="true" /> */}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/crnnoztrrk/" target="_blank">
                  <AiOutlineInstagram className="social-icons" />
                  {/* <i className="fa fa-instagram" aria-hidden="true" /> */}
                </a>
              </li>
            </ul>
            <hr />
            <div className="copyright">
              If you want to see my resume, just send a message.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contact-div">
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
      </div> */}

      {/* <form ref={form} onSubmit={sendEmail}>
        <h3>If you want to see my resume, just send a message. </h3>
        <input required autoComplete="off" type="text" name="user_name" placeholder="Enter your name" />
        <input required autoComplete="off" type="email" name="user_email" placeholder="Enter your email"/>
        <textarea required autoComplete="off" name="message" placeholder="Enter your message" />
        <input type="submit" value="Send" />
        </form> */}
    </div>
  );
};

export default Contact;
