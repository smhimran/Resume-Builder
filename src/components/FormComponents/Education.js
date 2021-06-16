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
import { changeEducations } from "../../actions/formActions";
import EducationsList from "./EducationsList";

function Education() {
  const educations = useSelector((state) => state.educations);
  const [degree, setDegree] = useState("");
  const [institute, setInstitute] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [gpa, setGpa] = useState("");
  const [outOf, setOutOf] = useState("");

  const [ongoing, setOngoing] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newEducation = {
      degree,
      institute,
      start,
      end,
      ongoing,
      gpa,
      outOf,
    };

    dispatch(changeEducations([...educations, newEducation]));

    localStorage.setItem(
      "Educations",
      JSON.stringify([...educations, newEducation])
    );

    setDegree("");
    setInstitute("");
    setStart("");
    setEnd("");
    setGpa("");
    setOutOf("");
    setOngoing(false);
  };

  return (
    <Box component="div" mb={3}>
      <Container>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Education
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
                  label="Degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  fullWidth
                />
              </Box>

              <Box component="div" m={2}>
                <TextField
                  variant="standard"
                  color="secondary"
                  label="Institute"
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
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

                <Box component="span" pl={2}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={ongoing}
                        onChange={() => setOngoing(!ongoing)}
                        color="secondary"
                      />
                    }
                    label="Ongoing"
                  />
                </Box>
              </Box>
              <Box component="div" m={2}>
                <Box component="span" pr={2}>
                  <TextField
                    variant="standard"
                    label="Grade point"
                    color="secondary"
                    type="number"
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                  />
                </Box>
                <Box component="span" pl={2}>
                  <TextField
                    variant="standard"
                    label="Out of"
                    color="secondary"
                    type="number"
                    value={outOf}
                    onChange={(e) => setOutOf(e.target.value)}
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
                Add Education
              </Button>
            </Box>
          </Grid>

          <Grid item sm="5">
            <EducationsList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Education;
