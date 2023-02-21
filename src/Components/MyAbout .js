import React from "react";
import Developer from "../img/28242367.jpg";

const MyAbout = () => {
  return (
    <div className="about-container" id="about">
      <div className="developer-imag">
        <img src={Developer} alt="developer-girl" />
      </div>
      <div className="my-about">
        <div className="who-im">
          <h2>Who am i?</h2>
          <p>
            I am Ceren and I am 22 years old. I graduated from Istanbul Gelişim
            University with an associate degree in Computer Technology.
            Currently, I am studying Management Information Systems. I live in
            Istanbul. I have been developing in the front-end field for some
            time. I have the ability to solve problems. I want to specialize in
            my field in the industry and become the best programmer I can be. I
            consider myself successful in this area and I am ready to work to be
            even more successful in the future.
          </p>
          <div className="whats-language">
            <h2>What programming languages do i know?</h2>
            <p>
              In frontend development, I know HTML, CSS, and JavaScript
              languages. In addition, I am proficient in C# and Java. I also
              know the React.js framework as a UI library and am learning React
              Native. One of my recent goals is to acquire basic knowledge of
              PHP and also to have more backend knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
