import {
  CHANGE_ADRESS,
  CHANGE_CONTACT,
  CHANGE_EDUCATIONS,
  CHANGE_EMAIL,
  CHANGE_IMAGE,
  CHANGE_INTRO,
  CHANGE_NAME,
  CHANGE_SUMMARY,
  CHANGE_URL,
} from "../actions/types";

const initialState = {
  name: localStorage.getItem("Name"),
  intro: localStorage.getItem("Intro"),
  email: localStorage.getItem("Email"),
  contact: localStorage.getItem("Contact"),
  url: localStorage.getItem("Url"),
  address: localStorage.getItem("Address"),
  image: localStorage.getItem("Image"),
  summary: localStorage.getItem("Summary"),
  educations: JSON.parse(localStorage.getItem("Educations")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case CHANGE_INTRO:
      return {
        ...state,
        intro: action.payload,
      };

    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case CHANGE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    case CHANGE_URL:
      return {
        ...state,
        url: action.payload,
      };

    case CHANGE_ADRESS:
      return {
        ...state,
        address: action.payload,
      };

    case CHANGE_IMAGE:
      return {
        ...state,
        image: action.payload,
      };

    case CHANGE_SUMMARY:
      return {
        ...state,
        summary: action.payload,
      };

    case CHANGE_EDUCATIONS:
      return {
        ...state,
        educations: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
