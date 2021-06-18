import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { changeStrengths } from "../../actions/formActions";
import { Typography } from "@material-ui/core";

function StrengthList() {
  const strengths = useSelector((state) => state.strengths);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newStrengthList = strengths.filter((strength, ind) => ind !== index);

    dispatch(changeStrengths(newStrengthList));
    localStorage.setItem("Strengths", JSON.stringify(newStrengthList));
  };

  return (
    <Box component="div" m={2}>
      {strengths.map((strength, index) => {
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
                    {strength.title}
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

export default StrengthList;
