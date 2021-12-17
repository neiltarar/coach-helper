import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";

export default function Copyright(props) {
  return (
    <div>
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}>
        <br />
        <CardMedia
          component='img'
          height='180'
          image='./images/footerImage.jpeg'
        />
        <br />
        {"Copyright © "}
        <Link color='inherit' href='https://www.neil-tarar.com/'>
          Neil Tarar
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}
