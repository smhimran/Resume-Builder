import React from "react";
import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
  return (
    <div>
      <div className="main-container">
        <Form />
        <Preview />
      </div>
    </div>
  );
}

export default App;
