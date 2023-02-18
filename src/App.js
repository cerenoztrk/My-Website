import { Link } from "react-scroll";
import Logo from "./img/2.jpg";
import './App.css';

import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";


import Anasayfa from "./Components/Anasayfa";
import Hakkımda from "./Components/Hakkımda";
import Projeler from "./Components/Projeler";
import Iletisim from "./Components/Iletisim";
// nerde css
function App() {
  return (
    <>
    <div className="header-container">
      <nav className="header">
          <div className="logo">
          <img src={Logo} alt="developer-logo"/>
          </div> 
        <div className="nav-items">
          <div className="nav-links">
            <Link to="anasayfa" spy={true} smooth={true} offset={0} duration={500}>ANASAYFA</Link>
            <Link to="hakkımda" spy={true} smooth={true} offset={-200} duration={500}>HAKKIMDA</Link>
            <Link to="projeler" spy={true} smooth={true} offset={-50} duration={500}>PROJELER</Link>
            <Link to="iletisim" spy={true} smooth={true} offset={50} duration={500}>İLETİŞİM</Link>
          </div>
          <div className="icons">
              <a href="#">
                <AiOutlineInstagram/>
              </a>
              <a href="#">
                <AiFillGithub/>
              </a>
              <a href="#">
                <AiFillLinkedin  />
              </a>
          </div>
        </div>
      </nav>
    </div>
      <Anasayfa/>
      <Hakkımda/>
      <Projeler/>
      <Iletisim/>
    </>
  );
}

export default App;
