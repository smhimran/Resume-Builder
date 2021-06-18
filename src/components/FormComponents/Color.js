import React, { useState, Fragment } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeColor } from "../../actions/formActions";
import { Lens } from "@material-ui/icons";

function Color() {
  const [color, setColor] = useState("blue");

  const dispatch = useDispatch();

  return (
    <Box>
      <Typography variant="h4" component="h4" align="center" color="primary">
        Color Theme
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend" color="secondary">
          Choose a theme color
        </FormLabel>
        <RadioGroup
          aria-label="Color"
          name="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            dispatch(changeColor(e.target.value));
          }}
        >
          <FormControlLabel
            value="blue"
            control={<Radio />}
            label={
              <Fragment>
                <Lens style={{ color: "#0f92ff" }} />
              </Fragment>
            }
          />
          <FormControlLabel
            value="green"
            control={<Radio />}
            label={
              <Fragment>
                <Lens style={{ color: "#1bbb1b" }} />
              </Fragment>
            }
          />
          <FormControlLabel
            value="purple"
            control={<Radio />}
            label={
              <Fragment>
                <Lens style={{ color: "#9747ff" }} />
              </Fragment>
            }
          />
          <FormControlLabel
            value="black"
            control={<Radio />}
            label={
              <Fragment>
                <Lens style={{ color: "#777" }} />
              </Fragment>
            }
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default Color;
