import {
  TextField,
  Typography,
  Box,
  Container,
  Switch,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeExperiences } from "../../actions/formActions";
import ExperienceList from "./ExperienceList";

function Experience() {
  const experiences = useSelector((state) => state.experiences);
  const [title, settitle] = useState("");
  const [organization, setorganization] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [ongoing, setOngoing] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newExperiences = {
      title,
      organization,
      start,
      end,
      ongoing,
    };

    dispatch(changeExperiences([...experiences, newExperiences]));

    localStorage.setItem(
      "Experiences",
      JSON.stringify([...experiences, newExperiences])
    );

    settitle("");
    setorganization("");
    setStart("");
    setEnd("");
    setOngoing(false);
  };

  return (
    <Box component="div" mb={3}>
      <Container>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Experiences
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
                  label="Organization"
                  value={organization}
                  onChange={(e) => setorganization(e.target.value)}
                  fullWidth
                />
              </Box>

              <Box component="div" m={2}>
                <Box component="span" pr={2}>
                  <TextField
                    variant="standard"
                    label="Date Started"
                    color="secondary"
                    type="date"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box component="span" pl={2}>
                  <TextField
                    variant="standard"
                    color="secondary"
                    label="Date Ended"
                    type="date"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    disabled={ongoing}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>

                <Box component="span">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={ongoing}
                        onChange={() => setOngoing(!ongoing)}
                        color="secondary"
                      />
                    }
                    label="Present"
                  />
                </Box>
              </Box>
            </form>
            <Box component="div" m={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Add Experience
              </Button>
            </Box>
          </Grid>

          <Grid item sm="5">
            <ExperienceList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;
