
import { Link } from "react-scroll";
import Logo from "./img/5.png";
import './App.css';




import Homepage from "./Components/Homepage";
import MyAbout  from "./Components/MyAbout ";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact  from "./Components/Contact";
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
            <Link to="homepage" spy={true} smooth={true} offset={0} duration={500}>HOMEPAGE</Link>
            <Link to="about" spy={true} smooth={true} offset={-200} duration={500}>ABOUT </Link>
            <Link to="skills" spy={true} smooth={true} offset={-200} duration={500}>SKILLS</Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>PROJECTS</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>
          </div>
          
        </div>
      </nav>
    </div>
      <Homepage/>
      <MyAbout/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
