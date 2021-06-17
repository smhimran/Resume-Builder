import { TextField, Typography, Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeProjects } from "../../actions/formActions";
import ProjectList from "./ProjectList";

function Project() {
  const projects = useSelector((state) => state.projects);
  const [title, settitle] = useState("");
  const [link, setlink] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newProjects = {
      title,
      link,
      description,
    };

    dispatch(changeProjects([...projects, newProjects]));

    localStorage.setItem(
      "Projects",
      JSON.stringify([...projects, newProjects])
    );

    settitle("");
    setlink("");
    setdescription("");
  };

  return (
    <Box component="div" mb={3}>
      <Container>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Projects
        </Typography>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item sm="7">
            <form autoComplete="off">
              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  color="secondary"
                  label="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  fullWidth
                />
              </Box>

              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  color="secondary"
                  label="Link (project link or repository)"
                  value={link}
                  onChange={(e) => setlink(e.target.value)}
                  fullWidth
                />
              </Box>

              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  color="secondary"
                  label="Project description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  fullWidth
                />
              </Box>
            </form>
            <Box component="div" m={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Add Project
              </Button>
            </Box>
          </Grid>

          <Grid item sm="5">
            <ProjectList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Project;
