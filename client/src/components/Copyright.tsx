import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Copyright(props: any) {
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
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
