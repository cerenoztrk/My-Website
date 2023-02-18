import React from 'react'
import { Link } from "react-scroll";

const Anasayfa = () => {
  return (
    <div className='homepage-container' id='anasayfa'>
        <div className='homepage-content'>
            <h2>Merhaba Ben</h2>
            <h1>Ceren Öztürk</h1>
            <p>Ben bir front-end developerım ve bu alanda gelişmeye devam ediyorum.</p>
            <span>
                <Link to="hakkımda"  spy={true} smooth={true} offset={-200} duration={500}>Daha fazla</Link>
            </span>
        </div>
      
    </div>
  )
}

export default Anasayfa
