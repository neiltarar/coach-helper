import * as React from "react";
import { Box } from "@mui/system";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function DeleteIcon() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}>
      <DeleteOutlinedIcon color='primary' />
    </Box>
  );
}
