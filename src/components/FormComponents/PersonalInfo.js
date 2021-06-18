import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeAdress,
  changeContact,
  changeEmail,
  changeImage,
  changeIntro,
  changeName,
  changeUrl,
} from "../../actions/formActions";

import ClearIcon from "@material-ui/icons/Clear";

function PersonalInfo() {
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [intro, setIntro] = useState(localStorage.getItem("Intro"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [contact, setContact] = useState(localStorage.getItem("Contact"));
  const [url, setUrl] = useState(localStorage.getItem("Url"));
  const [address, setAddress] = useState(localStorage.getItem("Address"));

  const [image, setImage] = useState(false);

  const dispatch = useDispatch();

  const handleImage = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const localImageUrl = window.URL.createObjectURL(files[0]);

    dispatch(changeImage(localImageUrl));

    setImage(true);

    // localStorage.setItem("Image", localImageUrl);
  };

  const handleDeleteImage = () => {
    setImage(false);
    dispatch(changeImage(""));
  };

  return (
    <Box component="div">
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Typography variant="h4" component="h4" align="center" color="primary">
          Personal Information
        </Typography>

        <form autoComplete="off">
          <Box component="div" m={2}>
            <TextField
              id="name"
              variant="standard"
              type="text"
              color="secondary"
              label="Name"
              fullWidth
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                dispatch(changeName(e.target.value));
                localStorage.setItem("Name", e.target.value);
              }}
            />
          </Box>

          <Box component="div" m={2}>
            <TextField
              id="intro"
              variant="standard"
              type="text"
              color="secondary"
              label="Intro"
              fullWidth
              required
              value={intro}
              onChange={(e) => {
                setIntro(e.target.value);
                dispatch(changeIntro(e.target.value));
                localStorage.setItem("Intro", e.target.value);
              }}
            />
          </Box>

          <Box component="div" m={2}>
            <TextField
              id="email"
              variant="standard"
              type="email"
              color="secondary"
              label="Email"
              fullWidth
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                dispatch(changeEmail(e.target.value));
                localStorage.setItem("Email", e.target.value);
              }}
            />
          </Box>

          <Box component="div" m={2}>
            <Box component="span" pr={2}>
              <TextField
                id="contact"
                variant="standard"
                type="contact"
                color="secondary"
                label="Contact Number"
                required
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  dispatch(changeContact(e.target.value));
                  localStorage.setItem("Contact", e.target.value);
                }}
              />
            </Box>

            <Box component="span" pl={2} pr={2}>
              <TextField
                id="url"
                variant="standard"
                type="url"
                color="secondary"
                label="Website link"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  dispatch(changeUrl(e.target.value));
                  localStorage.setItem("Url", e.target.value);
                }}
              />
            </Box>

            <Box component="span" pl={2}>
              <TextField
                id="address"
                variant="standard"
                type="text"
                color="secondary"
                label="Address (in short)"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  dispatch(changeAdress(e.target.value));
                  localStorage.setItem("Address", e.target.value);
                }}
              />
            </Box>
          </Box>

          <Box component="div" m={2}>
            <Button variant="contained" component="label" color="secondary">
              Choose Image
              <input type="file" hidden onChange={handleImage} />
            </Button>
            {image && (
              <Box component="span">
                <IconButton
                  children={<ClearIcon />}
                  color="secondary"
                  onClick={handleDeleteImage}
                />
              </Box>
            )}
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default PersonalInfo;
