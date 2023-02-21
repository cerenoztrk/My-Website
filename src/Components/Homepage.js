import React from 'react'
import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <div className='homepage-container' id='homepage'>
        <div className='homepage-content'>
            <h2>Hi! I'm</h2>
            <h1>Ceren Öztürk</h1>
            <p>I am a front-end developer and I am continuing to improve in this field.</p>
            <span>
                <Link to="about"  spy={true} smooth={true} offset={-200} duration={500}>Learn more</Link>
            </span>
        </div>
      
    </div>
  )
}

export default Homepage;
