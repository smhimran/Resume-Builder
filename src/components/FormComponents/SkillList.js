import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { changeSkills } from "../../actions/formActions";
import { Typography } from "@material-ui/core";

function SkillList() {
  const skills = useSelector((state) => state.skills);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newSkillList = skills.filter((strength, ind) => ind !== index);

    dispatch(changeSkills(newSkillList));
    localStorage.setItem("Skills", JSON.stringify(newSkillList));
  };

  return (
    <Box component="div" m={2}>
      {skills.map((strength, index) => {
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
                  {strength.first && (
                    <Typography variant="subtitle1" color="secondary">
                      {strength.first}
                    </Typography>
                  )}
                  {strength.second && (
                    <Typography variant="subtitle1" color="secondary">
                      {strength.second}
                    </Typography>
                  )}
                  {strength.third && (
                    <Typography variant="subtitle1" color="secondary">
                      {strength.third}
                    </Typography>
                  )}
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

export default SkillList;
