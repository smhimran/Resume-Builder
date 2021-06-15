import {
  CHANGE_ADRESS,
  CHANGE_CONTACT,
  CHANGE_EMAIL,
  CHANGE_IMAGE,
  CHANGE_INTRO,
  CHANGE_NAME,
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

    default:
      return state;
  }
};

export default reducer;
