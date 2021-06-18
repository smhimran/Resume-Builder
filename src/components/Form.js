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
import { Alert } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import Color from "./FormComponents/Color";

function Form() {
  return (
    <Box component="div" m={2} p={2}>
      <Typography variant="h3" component="h3" align="center" color="secondary">
        Resume Builder
      </Typography>
      <Alert severity="info">
        If a field has value, it'll appare in the resume automatically
      </Alert>
      <PersonalInfo />
      <Summary />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Strengths />
      <Achievements />
      <Social />
      <Color />
    </Box>
  );
}

export default Form;
