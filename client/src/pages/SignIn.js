import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NotLoggedNavBar from "../components/NotLoggedNavbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useContext, useState } from "react";
import { GetUserContext, SetUserContext } from "../context/UserContext";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // const userContext = GetUserContext();
    // const setUserContext = SetUserContext();
    // Send the login information to Express Server
    axios
      .post("http://localhost:3001/api/users/sign-in", {
        email: email,
        password: password,
      })
      .then((res) => {
        const data = res.data;
        if (data.login) {
          // setUserContext({ loginStatus: true });
          window.location.href = "/myPage";
        }
      });
  };

  return (
    <React.Fragment>
      <NotLoggedNavBar />
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <br />
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href='/sign-up' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
