import { Box } from "@material-ui/core";
import React from "react";
import Education from "./FormComponents/Education";
import PersonalInfo from "./FormComponents/PersonalInfo";
import Summary from "./FormComponents/Summary";
import Experience from "./FormComponents/Experience";
import Projects from "./FormComponents/Projects";
import Achievements from "./FormComponents/Achievements";
import Strengths from "./FormComponents/Strengths";
import Skills from "./FormComponents/Skills";
import Social from "./FormComponents/Social";

function Form() {
  return (
    <Box component="div" m={2} p={2}>
      <PersonalInfo />
      <Summary />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Strengths />
      <Achievements />
      <Social />
    </Box>
  );
}

export default Form;
