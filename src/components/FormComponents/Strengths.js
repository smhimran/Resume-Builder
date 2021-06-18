import { TextField, Typography, Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeStrengths } from "../../actions/formActions";
import StrengthList from "./StrengthList";

function Strengths() {
  const strengths = useSelector((state) => state.strengths);
  const [title, settitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newStrengths = {
      title,
    };

    dispatch(changeStrengths([...strengths, newStrengths]));

    localStorage.setItem(
      "Strengths",
      JSON.stringify([...strengths, newStrengths])
    );

    settitle("");
  };

  return (
    <Box component="div" mb={3}>
      <Container>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Strengths
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
                Add Strength
              </Button>
            </Box>
          </Grid>

          <Grid item sm="5">
            <StrengthList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Strengths;
