import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { changeExperiences } from "../../actions/formActions";
import { Typography } from "@material-ui/core";

function ExpereienceList() {
  const experiences = useSelector((state) => state.experiences);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newEducationList = experiences.filter(
      (expericence, ind) => ind !== index
    );

    dispatch(changeExperiences(newEducationList));
  };

  return (
    <Box component="div" m={2}>
      {experiences.map((experience, index) => {
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
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    {experience.organization}
                  </Typography>
                  <Typography variant="overline" component="p" color="primary">
                    {experience.start} -{" "}
                    {experience.ongoing ? <span>Present</span> : experience.end}
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

export default ExpereienceList;
