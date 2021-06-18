import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

export default store;
