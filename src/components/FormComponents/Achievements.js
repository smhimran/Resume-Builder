import { TextField, Typography, Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeAchievements } from "../../actions/formActions";
import AchievementList from "./AchievementList";

function Achievements() {
  const achievements = useSelector((state) => state.achievements);
  const [title, settitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newAchievements = {
      title,
    };

    dispatch(changeAchievements([...achievements, newAchievements]));

    localStorage.setItem(
      "Achievements",
      JSON.stringify([...achievements, newAchievements])
    );

    settitle("");
  };

  return (
    <Box component="div" mb={3}>
      <Container>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Achievements
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
                  color="secondary"
                  label="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
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
                Add Achievement
              </Button>
            </Box>
          </Grid>

          <Grid item sm="5">
            <AchievementList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Achievements;
