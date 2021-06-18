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
  experiences: JSON.parse(localStorage.getItem("Experiences")) || [],
  projects: JSON.parse(localStorage.getItem("Projects")) || [],
  achievements: JSON.parse(localStorage.getItem("Achievements")) || [],
  strengths: JSON.parse(localStorage.getItem("Strengths")) || [],
  skills: JSON.parse(localStorage.getItem("Skills")) || [],
  linkedin: localStorage.getItem("Twitter"),
  twitter: localStorage.getItem("Linkedin"),
  github: localStorage.getItem("Github"),
  facebook: localStorage.getItem("Facebook"),
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

    case CHANGE_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };

    case CHANGE_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case CHANGE_ACHIEVEMENTS:
      return {
        ...state,
        achievements: action.payload,
      };

    case CHANGE_STRENGTHS:
      return {
        ...state,
        strengths: action.payload,
      };

    case CHANGE_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };

    case CHANGE_LINKEDIN:
      return {
        ...state,
        linkedin: action.payload,
      };

    case CHANGE_TWITTER:
      return {
        ...state,
        twitter: action.payload,
      };

    case CHANGE_GITHUB:
      return {
        ...state,
        github: action.payload,
      };

    case CHANGE_FACEBOOK:
      return {
        ...state,
        facebook: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
