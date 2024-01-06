import React from "react";
import ismailImage from "../../images/ismail.png"; // Adjust the path to your image
import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/styles.css";

const AboutMe = () => {
  const skills = [
    { name: "HTML5", rating: 5 },
    { name: "CSS3", rating: 4 },
    { name: "Javascript", rating: 3 },
    { name: "React", rating: 3 },
    { name: "Python", rating: 4 },
    { name: "Django", rating: 4 },
    { name: "Node.js", rating: 3 },
    { name: "Flask", rating: 3.5 },
  ];

  return (
    <section
      className="middle-container fadeRight"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      id="about"
    >
      <div className="noisy">
        <h2>A Little Bit About Me</h2>
        <h1>
          I'm an analytical and solution-oriented Computer Engineering graduate
          with a passion for application development, spanning both frontend and
          backend disciplines. Dedicated to mastering system design, I thrive on
          creating scalable, robust, and client-pleasing applications.
        </h1>
      </div>
      <section className="skills">
        <div className="noisy">
          <div className="emblem">
            <span className="icon-information"></span>
          </div>
          <div className="frame">
            <div className="piece output">
              <h1>TL;DR?</h1>
              <img className="pic" src={ismailImage} alt="Ismail" />
              <h2>Age:25</h2>
              <h2>Nationality:Egyptian</h2>
              <h2>SELF PROCLAMATIONS:</h2>
              <div>
                <a href="https://twitter.com">
                  <i className="fa fa-keyboard-o fa-2x">
                    <h1>Web Developer</h1>
                  </i>
                </a>
                <a href="https://twitter.com">
                  <i className="fa fa-pencil fa-2x">
                    <h1>UX Enthusiast</h1>
                  </i>
                </a>
                <a href="https://facebook.com">
                  <i className="fa fa-headphones fa-2x">
                    <h1>Music Lover</h1>
                  </i>
                </a>
              </div>
              <div className="container">
                {skills.map((skill, index) => (
                  <>
                    <h1 className={`skill-${index + 1}`}>{skill.name}</h1>
                    <div className={`rating-${index + 1}`}>
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa fa-heart fa-2x ${
                            i >= skill.rating ? "empty" : ""
                          }`}
                          style={{ marginTop: i === 0 ? "20px" : "0" }}
                        ></i>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="piece scanlines noclick"></div>
        <div className="piece glow noclick"></div>
      </section>
    </section>
  );
};

export default AboutMe;
