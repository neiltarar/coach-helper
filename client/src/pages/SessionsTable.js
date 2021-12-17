import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AddIcon from "../components/AddIcon";
import DeleteIcon from "../components/DeleteIcon";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SessionsTable() {
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [deleteID, setDeleteID] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/api/training-sessions`
      );

      setTrainingSessions(response.data);
    }
    fetchData();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    const data = new FormData(event.currentTarget);
    const payload = {
      session: data.get("session"),
      type: data.get("type"),
      info: data.get("info"),
      reps: data.get("reps"),
      location: data.get("location"),
    };
    axios.post(
      `http://localhost:3001/api/training-sessions/add-session`,
      payload
    );
  };

  const handleCheckBoxChange = (event) => {
    const status = event.target.checked;
    const trainingSessionID = event.target.value;
    if (status === true) {
      setDeleteID([...deleteID, trainingSessionID]);
      console.log(deleteID);
    } else if (status === false) {
      if ([...deleteID].includes(trainingSessionID)) {
        setDeleteID(
          [...deleteID].splice([...deleteID].indexOf(trainingSessionID), 1)
        );
      }
    }
    console.log(status, trainingSessionID);
  };

  const handleDeleteButton = async (event) => {
    event.preventDefault();
    const id = deleteID;
    try {
      await axios.delete(
        `http://localhost:3001/api/training-sessions/${id}/remove`
      );
      console.log("session removed");
    } catch (error) {
      console.log("session not removed");
    }
  };

  return (
    <React.Fragment>
      <Box
        id='main-page'
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        sx={{ m: "40px", borderBottom: 2 }}
        gap={2}>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"8pt"}
            component='div'
            gutterBottom>
            Session
          </Typography>
        </Box>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"8pt"}
            component='div'
            gutterBottom>
            Type
          </Typography>
        </Box>
        <Box gridColumn='span 3'>
          <Typography
            fontWeight={"900"}
            fontSize={"8pt"}
            component='div'
            gutterBottom>
            Info
          </Typography>
        </Box>
        <Box gridColumn='span 1'>
          <Typography
            fontWeight={"900"}
            fontSize={"8pt"}
            component='div'
            gutterBottom>
            Reps
          </Typography>
        </Box>
        <Box gridColumn='span 2'>
          <Typography
            fontWeight={"900"}
            fontSize={"8pt"}
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
        sx={{ m: "30px" }}
        gap={2}>
        {trainingSessions.map((session) => (
          <>
            <Box gridColumn='span 3'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
                <input
                  type='checkbox'
                  value={session.session_id}
                  onChange={handleCheckBoxChange}
                />
                {session.name}
              </Typography>
            </Box>
            <Box gridColumn='span 3'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
                {session.type}
              </Typography>
            </Box>
            <Box gridColumn='span 3'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
                {session.session}
              </Typography>
            </Box>
            <Box gridColumn='span 1'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
                {session.totalreps}
              </Typography>
            </Box>
            <Box gridColumn='span 2'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
                {session.location}
              </Typography>
            </Box>
          </>
        ))}
      </Box>

      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <TextField
              required
              margin='normal'
              required
              fullWidth
              id='session'
              label='session'
              name='session'
              autoComplete='session'
              autoFocus
              variant='standard'
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              required
              margin='normal'
              required
              fullWidth
              id='type'
              label='type'
              name='type'
              autoComplete='type'
              autoFocus
              variant='standard'
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              margin='normal'
              required
              fullWidth
              id='info'
              label='info'
              name='info'
              autoComplete='info'
              autoFocus
              variant='standard'
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              required
              margin='normal'
              required
              fullWidth
              id='reps'
              label='reps'
              name='reps'
              autoComplete='reps'
              autoFocus
              variant='standard'
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              margin='normal'
              required
              fullWidth
              id='location'
              label='location'
              name='location'
              autoComplete='location'
              autoFocus
              variant='standard'
            />
          </Grid>
        </Grid>
        <Grid item xs>
          <button type='submit'>
            <AddIcon />
          </button>
        </Grid>
      </Box>
      <Grid item xs>
        <button onClick={handleDeleteButton}>
          <DeleteIcon />
        </button>
      </Grid>
    </React.Fragment>
  );
}
