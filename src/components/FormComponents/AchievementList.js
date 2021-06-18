import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { changeAchievements } from "../../actions/formActions";
import { Typography } from "@material-ui/core";

function AchievementList() {
  const achievements = useSelector((state) => state.achievements);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newAchievementList = achievements.filter(
      (achievement, ind) => ind !== index
    );

    dispatch(changeAchievements(newAchievementList));
    localStorage.setItem("Achievements", JSON.stringify(newAchievementList));
  };

  return (
    <Box component="div" m={2}>
      {achievements.map((achievement, index) => {
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
                    {achievement.title}
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

export default AchievementList;
