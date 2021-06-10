import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [intro, setIntro] = useState(localStorage.getItem("Intro"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [contact, setContact] = useState(localStorage.getItem("Contact"));
  const [url, setUrl] = useState(localStorage.getItem("Url"));
  const [address, setAddress] = useState(localStorage.getItem("Address"));

  return (
    <Box component="div" m={2} p={2}>
      <Typography variant="h3" component="h3" align="center" color="secondary">
        Resume Builder
      </Typography>

      <Container maxWidth="md" style={{ marginTop: "20px" }}>
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
                  localStorage.setItem("Address", e.target.value);
                }}
              />
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Form;
