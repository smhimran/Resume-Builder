import { TextField, Typography, Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeSkills } from "../../actions/formActions";
import SkillList from "./SkillList";

function Skills() {
  const skills = useSelector((state) => state.skills);
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [third, setthird] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newSkills = {
      first,
      second,
      third,
    };

    dispatch(changeSkills([...skills, newSkills]));

    localStorage.setItem("Skills", JSON.stringify([...skills, newSkills]));

    setfirst("");
    setsecond("");
    setthird("");
  };

  return (
    <Box component="div" mb={3}>
      <Container>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Skills
        </Typography>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item sm="7">
            <form>
              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  type="Text"
                  color="secondary"
                  label="Skill 1"
                  value={first}
                  fullWidth
                  onChange={(e) => {
                    setfirst(e.target.value);
                  }}
                />
              </Box>

              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  type="text"
                  color="secondary"
                  label="Skill 2"
                  value={second}
                  fullWidth
                  onChange={(e) => {
                    setsecond(e.target.value);
                  }}
                />
              </Box>

              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  type="text"
                  color="secondary"
                  label="Skill 3"
                  value={third}
                  fullWidth
                  onChange={(e) => {
                    setthird(e.target.value);
                  }}
                />
              </Box>
            </form>
            <Box component="div" m={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Add Skill Group
              </Button>
            </Box>
          </Grid>

          <Grid item sm="5">
            <SkillList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
