import React from "react";
import { useSelector } from "react-redux";

function Resume() {
  const name = useSelector((state) => state.name);
  const intro = useSelector((state) => state.intro);
  const email = useSelector((state) => state.email);
  const contact = useSelector((state) => state.contact);
  const url = useSelector((state) => state.url);
  const address = useSelector((state) => state.address);
  const image = useSelector((state) => state.image);
  const summary = useSelector((state) => state.summary);
  const educations = useSelector((state) => state.educations);
  const experiences = useSelector((state) => state.experiences);

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
                    <a href="tel:{contact}">
                      <span>
                        <i className="fa fa-phone"></i>
                      </span>
                      {contact}
                    </a>
                  </div>
                  <div>
                    <a href="mailto:{email}">
                      <span>
                        <i className="fa fa-envelope-o"></i>
                      </span>
                      {email}
                    </a>
                  </div>
                </div>
                <div className="col">
                  {url && (
                    <div>
                      <a href="http://{url}">
                        <span>
                          <i className="fa fa-link"></i>
                        </span>{" "}
                        {url}
                      </a>
                    </div>
                  )}
                  <div>
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>{" "}
                    {address}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {image && (
            <div className="dp">
              <img src={image} alt="dp" />
            </div>
          )}
        </div>
        <div className="wrapper">
          <div className="left">
            {summary && (
              <div className="summary">
                <h2 className="section-header">Summary</h2>
                <p className="summary-body">{summary}</p>
              </div>
            )}

            {educations.length !== 0 && (
              <div className="education">
                <h2 className="section-header">Education</h2>
                <div className="education-body">
                  <ul className="educations">
                    {educations.map((education, index) => {
                      return (
                        <li className="education-item">
                          <div className="education-details">
                            <h4 className="item-title">{education.degree}</h4>
                            <h5 className="institute">{education.institute}</h5>
                            <h6 className="duration">
                              <span>
                                {" "}
                                <i className="fa fa-calendar"></i>{" "}
                              </span>{" "}
                              {education.start} -{" "}
                              {education.ongoing ? (
                                <span>Ongoing</span>
                              ) : (
                                education.end
                              )}
                            </h6>
                          </div>
                          <div className="grade">
                            <div id="left-border-item">
                              <h5 className="gpa">GPA</h5>
                              <h5 className="point">
                                {education.gpa}{" "}
                                <span className="total-point">
                                  / {education.outOf}
                                </span>
                              </h5>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            {experiences.length !== 0 && (
              <div className="experience">
                <h2 className="section-header">Experience</h2>
                <div className="experience-body">
                  <ul className="experiences">
                    {experiences.map((experience, index) => {
                      return (
                        <li className="experience-item">
                          <div className="experience-details">
                            <h4 className="item-title">{experience.title}</h4>
                            <h5 className="organization">
                              {experience.organization}
                            </h5>
                            <h6 className="duration">
                              <span>
                                {" "}
                                <i className="fa fa-calendar"></i>{" "}
                              </span>{" "}
                              {experience.start} -{" "}
                              {experience.ongoing ? (
                                <span>Present</span>
                              ) : (
                                experience.end
                              )}
                            </h6>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

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
