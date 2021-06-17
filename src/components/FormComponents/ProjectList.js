import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { changeProjects } from "../../actions/formActions";
import { Typography } from "@material-ui/core";

function ProjectList() {
  const projects = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newProjectList = projects.filter((project, ind) => ind !== index);

    dispatch(changeProjects(newProjectList));
    localStorage.setItem("Projects", JSON.stringify(newProjectList));
  };

  return (
    <Box component="div" m={2}>
      {projects.map((project, index) => {
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
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    {project.link}
                  </Typography>
                  <Typography variant="overline" component="p" color="primary">
                    {project.description}
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

export default ProjectList;
