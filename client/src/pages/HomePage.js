import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NotLoggedNavBar from "../components/NotLoggedNavbar";
import LoggedNavBar from "../components/LoggedNavBar";
// import { GetUserContext, SetUserContext } from "../context/UserContext";

const Heading = styled(Paper)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  textAlign: "center",
}));

// const userContext = GetUserContext();
// const setUserContext = SetUserContext();
// console.log(userContext.loginStatus);

export function HomePage() {
  return (
    <React.Fragment>
      <NotLoggedNavBar />
      <Box
        id='main-page'
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        sx={{ m: "20px" }}
        gap={2}>
        <Box gridColumn='span 4'>
          <Heading>
            <Typography
              fontWeight={"900"}
              fontSize={"10pt"}
              component='div'
              gutterBottom>
              Coach Helper
            </Typography>
          </Heading>
        </Box>
        <Box gridColumn='span 8'>
          <Typography fontSize={"8pt"} component='p' gutterBottom>
            This app is aiming to help running coaches to choose and implement
            different running sessions based on the weather conditions and the
            set of runners you are training.
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
