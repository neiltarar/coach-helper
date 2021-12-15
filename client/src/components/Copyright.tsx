import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Copyright(props: any) {
  return (
    <React.Fragment>
      <Item id='footer'>
        <Typography
          variant='body2'
          color='text.secondary'
          align='center'
          {...props}>
          <CardMedia
            component='img'
            height='120'
            image='./images/footerImage.jpeg'
          />
          <br />
          {"Copyright © "}
          <Link color='inherit' href='https://www.neil-tarar.com/'>
            Neil Tarar
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Item>
    </React.Fragment>
  );
}
