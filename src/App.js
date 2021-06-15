import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="main-container">
          <Form />
          <Preview />
        </div>
      </div>
    </Provider>
  );
}

export default App;
