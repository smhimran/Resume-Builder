import dp from "../2.jpg";
import React, { useState } from "react";

function Resume() {
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [intro, setIntro] = useState(localStorage.getItem("Intro"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [contact, setContact] = useState(localStorage.getItem("Contact"));
  const [url, setUrl] = useState(localStorage.getItem("Url"));
  const [address, setAddress] = useState(localStorage.getItem("Address"));

  return (
    <div className="resume-container">
      <div className="main">
        <div className="header">
          <div className="info">
            <h1 className="name">{name}</h1>
            <div className="contact">
              <div className="intro">
                <h4>{intro}</h4>
              </div>
              <div className="address">
                <div className="col">
                  <div>
                    <a href="tel:+8801517141687">
                      <span>
                        <i className="fa fa-phone"></i>
                      </span>
                      +8801517141687
                    </a>
                  </div>
                  <div>
                    <a href="mailto:smhimran@gmail.com">
                      <span>
                        <i className="fa fa-envelope-o"></i>
                      </span>
                      smhimran@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <a href="http://smhimran.me">
                      <span>
                        <i className="fa fa-link"></i>
                      </span>{" "}
                      smhimran.me
                    </a>
                  </div>
                  <div>
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>{" "}
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dp">
            <img src={dp} alt="dp" />
          </div>
        </div>
        <div className="wrapper">
          <div className="left">
            <div className="summary">
              <h2 className="section-header">Summary</h2>
              <p className="summary-body">
                A student of Computer Science and Engineering at Daffodil
                International University. I am also a Competitive Programmer and
                an apprentice in Web Development.
              </p>
            </div>
            <div className="education">
              <h2 className="section-header">Education</h2>
              <div className="education-body">
                <ul className="educations">
                  <li className="education-item">
                    <div className="education-details">
                      <h4 className="item-title">
                        B.Sc. in Computer Science and Engineering
                      </h4>
                      <h5 className="institute">
                        Daffodil International University
                      </h5>
                      <h6 className="duration">
                        <span>
                          {" "}
                          <i className="fa fa-calendar"></i>{" "}
                        </span>{" "}
                        January, 2018 - Ongoing
                      </h6>
                    </div>
                    <div className="grade">
                      <div id="left-border-item">
                        <h5 className="gpa">GPA</h5>
                        <h5 className="point">
                          3.73 <span className="total-point">/ 4.0</span>
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="projects">
              <h2 className="section-header">Projects</h2>
              <div className="projectslists">
                <ul className="projectslist">
                  <li className="projectitem">
                    <div className="project">
                      <h4 className="project-title">Hacksprint</h4>
                      <div className="link">
                        <span>
                          <i className="fa fa-link"></i>
                        </span>
                        <a
                          href="http://hacksprint.me"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          http://hacksprint.me
                        </a>
                      </div>
                      <div className="description">
                        <p>Where developers challenge their coding skills</p>
                      </div>
                    </div>
                  </li>
                  <li className="projectitem">
                    <div className="project">
                      <h4 className="project-title">BlueProfile</h4>
                      <div className="link">
                        <span>
                          <i className="fa fa-link"></i>
                        </span>
                        <a
                          href="https://blueprofile-beta.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://blueprofile-beta.herokuapp.com/
                        </a>
                      </div>
                      <div className="description">
                        <p>Online profile for blue programmers</p>
                      </div>
                    </div>
                  </li>
                  <li className="projectitem">
                    <div className="project">
                      <h4 className="project-title">GreenDivision</h4>
                      <div className="link">
                        <span>
                          <i className="fa fa-link"></i>
                        </span>
                        <a
                          href="https://greendivision.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://greendivision.herokuapp.com/
                        </a>
                      </div>
                      <div className="description">
                        <p>A guide for beginners in programming</p>
                      </div>
                    </div>
                  </li>
                  <li className="projectitem">
                    <div className="project">
                      <h4 className="project-title">ExpenseXpert</h4>
                      <div className="link">
                        <span>
                          <i className="fa fa-link"></i>
                        </span>
                        <a
                          href="https://github.com/erfanul007/ExpenseXpert"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/erfanul007/ExpenseXpert
                        </a>
                      </div>
                      <div className="description">
                        <p>An expense tracker app</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="achievements">
              <h2 className="section-header">Achievements</h2>
              <div className="achievements-items">
                <ul className="achievementlist">
                  <li className="achivement">
                    <span className="icon">
                      <i className="fa fa-trophy"></i>
                    </span>{" "}
                    3rd in DIU Intra University Programming Contest,2019
                  </li>
                  <li className="achivement">
                    <span className="icon">
                      <i className="fa fa-diamond"></i>
                    </span>{" "}
                    6th DIU Take-off Programming Contest, Summer 2018
                  </li>
                  <li className="achivement">
                    <span className="icon">
                      <i className="fa fa-code"></i>
                    </span>{" "}
                    60th in ICPC Dhaka Regional 2019
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="skills">
              <h2 className="section-header">Skills</h2>
              <div className="skillists">
                <ul className="skillist">
                  <li className="skill">
                    <div className="skill-group">
                      <h3 className="skill-item">Problem Solving</h3>
                      <h3 className="skill-item">C/C++</h3>
                      <h3 className="skill-item">Python</h3>
                    </div>
                  </li>
                  <li className="skill">
                    <div className="skill-group">
                      <h3 className="skill-item">Web Development</h3>
                      <h3 className="skill-item">Django</h3>
                      <h3 className="skill-item">Express</h3>
                    </div>
                  </li>
                  <li className="skill">
                    <div className="skill-group">
                      <h3 className="skill-item">HTML & CSS</h3>
                      <h3 className="skill-item">React</h3>
                      <h3 className="skill-item">Node</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="strengths">
              <h2 className="section-header">Strengths</h2>
              <div className="strengthlists">
                <ul className="strengthlist">
                  <li className="strength">
                    <i className="fa fa-circle-o-notch"></i> Learning Agility
                  </li>
                  <li className="strength">
                    <i className="fa fa-circle-o-notch"></i> Self Motivated
                  </li>
                  <li className="strength">
                    <i className="fa fa-circle-o-notch"></i> Critical Thinking
                  </li>
                  <li className="strength">
                    <i className="fa fa-circle-o-notch"></i> Positive Attitude
                  </li>
                </ul>
              </div>
            </div>

            <div className="online">
              <h2 className="section-header">Find Me Online</h2>
              <div className="social-links">
                <ul className="sociallist">
                  <li className="social">
                    <span className="icon">
                      <i className="fa fa-linkedin"></i>
                    </span>
                    <div className="link">
                      <span>Linkedin</span>
                      <a
                        href="https://www.linkedin.com/in/imran4416/"
                        className="social-link"
                      >
                        https://www.linkedin.com/in/imran4416/
                      </a>
                    </div>
                  </li>
                  <li className="social">
                    <span className="icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <div className="link">
                      <span>Twitter</span>
                      <a
                        href="https://twitter.com/imran34416/"
                        className="social-link"
                      >
                        https://twitter.com/imran34416/
                      </a>
                    </div>
                  </li>
                  <li className="social">
                    <span className="icon">
                      <i className="fa fa-github"></i>
                    </span>
                    <div className="link">
                      <span>Github</span>
                      <a
                        href="https://github.com/Yankee-16"
                        className="social-link"
                      >
                        https://github.com/Yankee-16
                      </a>
                    </div>
                  </li>
                  <li className="social">
                    <span className="icon">
                      <i className="fa fa-facebook"></i>
                    </span>
                    <div className="link">
                      <span>Facebook</span>
                      <a
                        href="https://www.facebook.com/Shah.Imran46/"
                        className="social-link"
                      >
                        https://www.facebook.com/Shah.Imran46/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
