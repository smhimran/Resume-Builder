import {
  CHANGE_ACHIEVEMENTS,
  CHANGE_ADRESS,
  CHANGE_CONTACT,
  CHANGE_EDUCATIONS,
  CHANGE_EMAIL,
  CHANGE_EXPERIENCES,
  CHANGE_IMAGE,
  CHANGE_INTRO,
  CHANGE_NAME,
  CHANGE_PROJECTS,
  CHANGE_STRENGTHS,
  CHANGE_SUMMARY,
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
