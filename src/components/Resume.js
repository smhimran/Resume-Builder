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
  const projects = useSelector((state) => state.projects);
  const achievements = useSelector((state) => state.achievements);
  const strengths = useSelector((state) => state.strengths);
  const skills = useSelector((state) => state.skills);
  const linkedin = useSelector((state) => state.linkedin);
  const twitter = useSelector((state) => state.twitter);
  const github = useSelector((state) => state.github);
  const facebook = useSelector((state) => state.facebook);

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
                  {contact && (
                    <div>
                      <a href="tel:{contact}">
                        <span>
                          <i className="fa fa-phone"></i>
                        </span>{" "}
                        {contact}
                      </a>
                    </div>
                  )}
                  {email && (
                    <div>
                      <a href="mailto:{email}">
                        <span>
                          <i className="fa fa-envelope-o"></i>
                        </span>{" "}
                        {email}
                      </a>
                    </div>
                  )}
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

                  {address && (
                    <div>
                      <span>
                        <i className="fa fa-map-marker"></i>
                      </span>{" "}
                      {address}
                    </div>
                  )}
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

            {projects.length !== 0 && (
              <div className="projects">
                <h2 className="section-header">Projects</h2>
                <div className="projectslists">
                  <ul className="projectslist">
                    {projects.map((project, index) => {
                      return (
                        <li className="projectitem">
                          <div className="project">
                            <h4 className="project-title">{project.title}</h4>
                            <div className="link">
                              <span>
                                <i className="fa fa-link"></i>
                              </span>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {" "}
                                {project.link}
                              </a>
                            </div>
                            <div className="description">
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            {achievements.length !== 0 && (
              <div className="achievements">
                <h2 className="section-header">Achievements</h2>
                <div className="achievements-items">
                  <ul className="achievementlist">
                    {achievements.map((achievement, index) => {
                      return (
                        <li className="achivement">
                          <span className="icon">
                            <i className="fa fa-trophy"></i>
                          </span>{" "}
                          {achievement.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            {skills.length !== 0 && (
              <div className="skills">
                <h2 className="section-header">Skills</h2>
                <div className="skillists">
                  <ul className="skillist">
                    {skills.map((skill, index) => {
                      return (
                        <li className="skill">
                          <div className="skill-group">
                            {skill.first && (
                              <h3 className="skill-item">{skill.first}</h3>
                            )}

                            {skill.second && (
                              <h3 className="skill-item">{skill.second}</h3>
                            )}

                            {skill.third && (
                              <h3 className="skill-item">{skill.third}</h3>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            {strengths.length !== 0 && (
              <div className="strengths">
                <h2 className="section-header">Strengths</h2>
                <div className="strengthlists">
                  <ul className="strengthlist">
                    {strengths.map((strength, index) => {
                      return (
                        <li className="strength">
                          <i className="fa fa-circle-o-notch"></i>{" "}
                          {strength.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            {(linkedin || twitter || github || facebook) && (
              <div className="online">
                <h2 className="section-header">Find Me Online</h2>
                <div className="social-links">
                  <ul className="sociallist">
                    {linkedin && (
                      <li className="social">
                        <span className="icon">
                          <i className="fa fa-linkedin"></i>
                        </span>
                        <div className="link">
                          <span>Linkedin</span>
                          <a href={linkedin} className="social-link">
                            {linkedin}
                          </a>
                        </div>
                      </li>
                    )}

                    {twitter && (
                      <li className="social">
                        <span className="icon">
                          <i className="fa fa-twitter"></i>
                        </span>
                        <div className="link">
                          <span>Twitter</span>
                          <a href={twitter} className="social-link">
                            {twitter}
                          </a>
                        </div>
                      </li>
                    )}

                    {github && (
                      <li className="social">
                        <span className="icon">
                          <i className="fa fa-github"></i>
                        </span>
                        <div className="link">
                          <span>Github</span>
                          <a href={github} className="social-link">
                            {github}
                          </a>
                        </div>
                      </li>
                    )}

                    {facebook && (
                      <li className="social">
                        <span className="icon">
                          <i className="fa fa-facebook"></i>
                        </span>
                        <div className="link">
                          <span>Facebook</span>
                          <a href={facebook} className="social-link">
                            {facebook}
                          </a>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
