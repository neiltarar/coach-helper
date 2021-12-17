import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SessionsTable() {
  const [sessions, setSessions] = useState({});
  axios.get("http://localhost:3001/api/training-sessions").then((res) => {
    // console.log(res.data);
    const payload = res.data;
    setSessions(payload);
  });

  return (
    <React.Fragment>
      <Box
        id='main-page'
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        sx={{ m: "40px", borderBottom: 1 }}
        gap={2}>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Session
          </Typography>
        </Box>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Type
          </Typography>
        </Box>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Info
          </Typography>
        </Box>
        <Box gridColumn='span 1'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Reps
          </Typography>
        </Box>
        <Box gridColumn='span 2'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Location
          </Typography>
        </Box>
      </Box>
      <Box
        id='main-page'
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        sx={{ m: "40px", borderBottom: 1 }}
        gap={2}>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Session
          </Typography>
        </Box>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Type
          </Typography>
        </Box>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Info
          </Typography>
        </Box>
        <Box gridColumn='span 1'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            Reps
          </Typography>
        </Box>
        <Box gridColumn='span 2'>
          <Typography
            fontWeight={"900"}
            fontSize={"10pt"}
            component='div'
            gutterBottom>
            {sessions}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
