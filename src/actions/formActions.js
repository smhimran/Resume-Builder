import {
  CHANGE_ADRESS,
  CHANGE_CONTACT,
  CHANGE_EMAIL,
  CHANGE_IMAGE,
  CHANGE_INTRO,
  CHANGE_NAME,
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
