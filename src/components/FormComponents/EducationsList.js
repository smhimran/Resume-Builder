import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { changeEducations } from "../../actions/formActions";
import { Typography } from "@material-ui/core";

function EducationsList() {
  const educations = useSelector((state) => state.educations);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newEducationList = educations.filter(
      (education, ind) => ind !== index
    );

    dispatch(changeEducations(newEducationList));
  };

  return (
    <Box component="div" m={2}>
      {educations.map((education, index) => {
        return (
          <Box component="div" m={2} boxShadow={2}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={0}
            >
              <Grid item sm="10">
                <Box component="div" m={2}>
                  <Typography variant="subtitle1" color="secondary">
                    {education.degree}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    {education.institute}
                  </Typography>
                  <Typography variant="overline" component="p" color="primary">
                    {education.start} -{" "}
                    {education.ongoing ? <span>Ongoing</span> : education.end}
                  </Typography>
                  <Typography variant="caption" component="p" color="primary">
                    {education.gpa} out of {education.outOf}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm="2">
                <IconButton
                  children={<ClearIcon />}
                  color="secondary"
                  onClick={() => handleDelete(index)}
                />
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export default EducationsList;
