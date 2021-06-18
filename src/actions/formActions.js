import {
  CHANGE_ACHIEVEMENTS,
  CHANGE_ADRESS,
  CHANGE_CONTACT,
  CHANGE_EDUCATIONS,
  CHANGE_EMAIL,
  CHANGE_EXPERIENCES,
  CHANGE_FACEBOOK,
  CHANGE_GITHUB,
  CHANGE_IMAGE,
  CHANGE_INTRO,
  CHANGE_LINKEDIN,
  CHANGE_NAME,
  CHANGE_PROJECTS,
  CHANGE_SKILLS,
  CHANGE_STRENGTHS,
  CHANGE_SUMMARY,
  CHANGE_TWITTER,
  CHANGE_URL,
} from "./types";

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

export const changeIntro = (intro) => {
  return {
    type: CHANGE_INTRO,
    payload: intro,
  };
};

export const changeEmail = (email) => {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
};

export const changeContact = (contact) => {
  return {
    type: CHANGE_CONTACT,
    payload: contact,
  };
};

export const changeUrl = (url) => {
  return {
    type: CHANGE_URL,
    payload: url,
  };
};

export const changeAdress = (address) => {
  return {
    type: CHANGE_ADRESS,
    payload: address,
  };
};

export const changeImage = (image) => {
  return {
    type: CHANGE_IMAGE,
    payload: image,
  };
};

export const changeSummary = (summary) => {
  return {
    type: CHANGE_SUMMARY,
    payload: summary,
  };
};

export const changeEducations = (educations) => {
  return {
    type: CHANGE_EDUCATIONS,
    payload: educations,
  };
};

export const changeExperiences = (experiences) => {
  return {
    type: CHANGE_EXPERIENCES,
    payload: experiences,
  };
};

export const changeProjects = (projects) => {
  return {
    type: CHANGE_PROJECTS,
    payload: projects,
  };
};

export const changeAchievements = (achievements) => {
  return {
    type: CHANGE_ACHIEVEMENTS,
    payload: achievements,
  };
};

export const changeStrengths = (strengths) => {
  return {
    type: CHANGE_STRENGTHS,
    payload: strengths,
  };
};

export const changeSkills = (skills) => {
  return {
    type: CHANGE_SKILLS,
    payload: skills,
  };
};

export const changeLinkedin = (linkedin) => {
  return {
    type: CHANGE_LINKEDIN,
    payload: linkedin,
  };
};

export const changeTwitter = (twitter) => {
  return {
    type: CHANGE_TWITTER,
    payload: twitter,
  };
};

export const changeGithub = (github) => {
  return {
    type: CHANGE_GITHUB,
    payload: github,
  };
};

export const changeFacebook = (facebook) => {
  return {
    type: CHANGE_FACEBOOK,
    payload: facebook,
  };
};
