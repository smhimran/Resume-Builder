import { Box, TextField, Typography, InputAdornment } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Alert from '@material-ui/lab/Alert';
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeFacebook,
  changeGithub,
  changeLinkedin,
  changeTwitter,
} from "../../actions/formActions";

function Social() {
  const [linkedin, setLinkedin] = useState(localStorage.getItem("Linkedin"));
  const [twitter, setTwitter] = useState(localStorage.getItem("Twitter"));
  const [github, setGithub] = useState(localStorage.getItem("Github"));
  const [facebook, setFacebook] = useState(localStorage.getItem("Facebook"));

  const dispatch = useDispatch();

  return (
    <Box component="div" mb={3}>
      <Typography variant="h4" component="h4" align="center" color="primary">
        Social Links
      </Typography>

      <form>
          <Box component="div" m={2}>
              <Alert severity="info">Provide Link only</Alert>
          </Box>
        <Box component="div" m={2}>
          <TextField
            variant="standard"
            type="url"
            color="secondary"
            label="Linkedin"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkedInIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            value={linkedin}
            fullWidth
            onChange={(e) => {
              setLinkedin(e.target.value);
              dispatch(changeLinkedin(e.target.value));
            }}
          />
        </Box>
        <Box component="div" m={2}>
          <TextField
            variant="standard"
            type="url"
            color="secondary"
            label="Twitter"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            value={twitter}
            fullWidth
            onChange={(e) => {
              setTwitter(e.target.value);
              dispatch(changeTwitter(e.target.value));
            }}
          />
        </Box>
        <Box component="div" m={2}>
          <TextField
            variant="standard"
            type="url"
            color="secondary"
            label="Github"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            value={github}
            fullWidth
            onChange={(e) => {
              setGithub(e.target.value);
              dispatch(changeGithub(e.target.value));
            }}
          />
        </Box>
        <Box component="div" m={2}>
          <TextField
            variant="standard"
            type="url"
            color="secondary"
            label="Facebook"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            value={facebook}
            fullWidth
            onChange={(e) => {
              setFacebook(e.target.value);
              dispatch(changeFacebook(e.target.value));
            }}
          />
        </Box>
      </form>
    </Box>
  );
}

export default Social;
