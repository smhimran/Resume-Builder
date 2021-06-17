import { Box } from "@material-ui/core";
import React from "react";
import Education from "./FormComponents/Education";
import PersonalInfo from "./FormComponents/PersonalInfo";
import Summary from "./FormComponents/Summary";
import Experience from "./FormComponents/Experience";

function Form() {
  return (
    <Box component="div" m={2} p={2}>
      <PersonalInfo />
      <Summary />
      <Education />
      <Experience />
    </Box>
  );
}

export default Form;
