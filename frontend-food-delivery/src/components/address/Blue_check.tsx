import React from "react";
import { Box } from "@mui/material";

export const Blue_check = () => {
  return (
    <Box
      sx={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        borderColor: "#0468C8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: "1px",
        border: "solid",
      }}
    >
      <Box
        sx={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: "#0468C8",
        }}
      ></Box>
    </Box>
  );
};
