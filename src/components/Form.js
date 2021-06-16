import { Box } from "@material-ui/core";
import React from "react";
import Education from "./FormComponents/Education";
import PersonalInfo from "./FormComponents/PersonalInfo";
import Summary from "./FormComponents/Summary";

function Form() {
  return (
    <Box component="div" m={2} p={2}>
      <PersonalInfo />
      <Summary />
      <Education />
    </Box>
  );
}

export default Form;
