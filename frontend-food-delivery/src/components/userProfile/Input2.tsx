import React from "react";

import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { Container, Box, Typography } from "@mui/material";

export const Input2 = () => {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "392px",
          height: "64px",

          borderRadius: "4px",
          display: "flex",
          gap: 1,
          paddingLeft: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",

            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            borderColor: "gray",
            borderWidth: "0.2px",
          }}
        >
          <HistoryOutlinedIcon />
        </Box>
        <Box
          sx={{
            width: "264px",
            height: "37px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={400} fontSize={16} color={"#0D1118"}>
            Захиалгын түүх
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
