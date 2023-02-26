import React from "react";
import { AiFillHtml5, AiOutlineConsoleSql, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiJava } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbCSharp } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
const Skills = () => {
  return (
    <div className="ability-container" id="skills">
      <h1>SKILLS</h1>
      <div className="skillss">
        <div className="frontend">
          <ul>
            <h2>FRONT-END</h2>
            <li className="list-items">
              <span className="skills-icon">
              <AiFillHtml5 className="app-icons" />
              HTML
              </span>
            </li>
            <li className="list-items">
              <span className="skills-icon">
              <DiCss3 className="app-icons" />
              CSS
              </span>
            </li>
            <li className="list-items">
              <span className="skills-icon">
              <DiJavascript1 className="app-icons" />
              JavaScript
              </span>
            </li>
            <li className="list-items">
              <span className="skills-icon">
              <FaReact className="app-icons" />
              ReactJS
              </span>
            </li>
          </ul>
        </div>
        <div className="backend">
          <ul>
            <h2>BACKEND</h2>
            <li className="list-items">
              <span className="skills-icon">
              <DiJava className="app-icons" />
              Java
              </span>
            </li>
            <li className="list-items">
               <span className="skills-icon">
              <TbCSharp className="app-icons" />
              C#
              </span>
            </li>
            <li className="list-items">
              <span className="skills-icon">
              <AiOutlineConsoleSql className="app-icons" />
              SQL
              </span>
            </li>
          </ul>
        </div>
        <div className="outros">
          <ul>
            <h2>OUTROS</h2>
            <li className="list-items">
              <span className="skills-icon">
              <AiFillGithub className="app-icons" />
              Github
              </span>
            </li>
            <li className="list-items">
              <span className="skills-icon">
              <FiFigma className="app-icons" />
              Figma
              </span>
            </li>
            <li className="list-items">
              <span className="skills-icon">
              <SiAdobephotoshop className="app-icons" />
              Adobe ps
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
