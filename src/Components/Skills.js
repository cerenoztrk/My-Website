import React from "react";

const Skills = () => {
  return (
    <div className="ability-container" id="skills">
      <h1>SKILLS</h1>
      <div className="skillss">
        <div className="frontend">
          <ul>
            <h1>FRONT-END</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="backend">
          <ul>
            <h1>BACKEND</h1>
            <li>Java</li>
            <li>C#</li>
            <li>SQL</li>
            <li>ASP.Net</li>
          </ul>
        </div>
        <div className="outros">
          <ul>
            <h1>OUTROS</h1>
            <li>Github</li>
            <li>Figma</li>
            <li>Adobe ps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
