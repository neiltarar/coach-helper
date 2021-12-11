import React from "react";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Heading = styled(Paper)(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1),
    textAlign: 'center',

  }));



export function HomePage() {
    return (
        <React.Fragment>
           
                    <Box id='main-page' display="grid" gridTemplateColumns="repeat(12, 1fr)" sx={{ m:"20px"}} gap={2} >
                        <Box gridColumn="span 12">
                            <Heading>
                            <Typography variant="h4" component="div" gutterBottom>
                                Coach Helper App
                            </Typography>
                            </Heading>
                                <p>This app is aiming to help running coaches to choose and implement different running 
                                    sessions based on the weather conditions and the set of runners you are training.
                                </p>
                            
                        </Box>
                       
                        <Box gridColumn="span 4">
                            <p>xs=4</p>
                        </Box>
                        <Box gridColumn="span 8">
                            <p>xs=8</p>
                        </Box>
                        <Box gridColumn="span 8">
                            <p>xs=8</p>
                        </Box>
                        <Box gridColumn="span 4">
                            <p>xs=4</p>
                        </Box>
                        <Box gridColumn="span 8">
                            <p>xs=8</p>
                        </Box>
                        <Box gridColumn="span 4">
                            <p>xs=4</p>
                        </Box>
                    </Box>

        </React.Fragment>
    )
}