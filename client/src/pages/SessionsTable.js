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
import SimpleButton from "../components/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SessionsTable() {
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [deleteID, setDeleteID] = useState([]);
  const [days, setDays] = useState([]);
  const [condition, setCondition] = useState([]);
  const apiKey = process.env.REACT_APP_APIKEY;

  const handleWeatherCheck = async (e) => {
    e.preventDefault();
    const url = ` http://api.weatherapi.com/v1/forecast.json?key=65c268e786e047e79dd195717211712&q=Sydney&days=3`;
    const req = axios.get(url);
    const res = await req;
    const daysArray = [];
    const conditionArray = [];

    res.data.forecast.forecastday.forEach((element) => {
      daysArray.push(element.date);
    });
    res.data.forecast.forecastday.forEach((element) => {
      conditionArray.push(element.day.condition.code);
    });

    setCondition(conditionArray);
    setDays(daysArray);
  };
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
    const data = new FormData(event.currentTarget);
    const payload = {
      date: data.get("date"),
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
        <Box gridColumn='span 1'>
          <Typography
            fontWeight={"900"}
            fontSize={"8pt"}
            component='div'
            gutterBottom>
            Date
          </Typography>
        </Box>
        <Box gridColumn='span 2'>
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
            <Box gridColumn='span 1'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
                <input
                  type='checkbox'
                  value={session.session_id}
                  onChange={handleCheckBoxChange}
                />
                {days[0] === session.date &&
                (condition[0] === 1063 ||
                  condition[0] === 1183 ||
                  condition[0] === 1186 ||
                  condition[0] === 1180 ||
                  condition[0] === 1189 ||
                  condition[0] === 1192) ? (
                  <div id='rain'>{session.date} Chance Of Rain</div>
                ) : (
                  <div>{session.date}</div>
                )}
              </Typography>
            </Box>
            <Box gridColumn='span 2'>
              <Typography
                fontWeight={"normal"}
                fontSize={"8pt"}
                component='div'>
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

      <Box
        component='form'
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, mx: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <br></br>
            <br></br>
            <input
              type='date'
              id='date'
              name='date'
              label='date'
              placeholder=''
              required
            />
          </Grid>
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
          <Grid item xs={2}>
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
          <br></br>
          <Grid item xs={2}>
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
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <button id='check-weather' onClick={handleWeatherCheck}>
                check weather
              </button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit'>
                <AddIcon />
              </button>
              <button onClick={handleDeleteButton}>
                <DeleteIcon />
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
    </React.Fragment>
  );
}
