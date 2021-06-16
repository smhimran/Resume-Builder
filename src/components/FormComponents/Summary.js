import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSummary } from "../../actions/formActions";

function Summary() {
  const [summary, setSummary] = useState(localStorage.getItem("Summary"));

  const dispatch = useDispatch();

  return (
    <Box component="div" mb={3}>
      <Container maxWidth="md" mt={2}>
        <Box component="div" mt={4}>
          <Typography
            variant="h4"
            component="h4"
            align="center"
            color="primary"
          >
            Summary
          </Typography>

          <Box component="div" m={2}>
            <TextField
              id="sumamry"
              variant="standard"
              type="text"
              color="secondary"
              label="Enter your short Summary"
              fullWidth
              multiline
              value={summary}
              onChange={(e) => {
                setSummary(e.target.value);
                dispatch(changeSummary(e.target.value));
                localStorage.setItem("Summary", e.target.value);
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Summary;
