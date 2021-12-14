import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface name {
  value: String;
}
export default function OutlinedButton(props: name) {
  return (
    <Stack spacing={2} direction='row'>
      <Button variant='outlined'>{props.value}</Button>
    </Stack>
  );
}
