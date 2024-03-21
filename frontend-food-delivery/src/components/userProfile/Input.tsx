import React from "react";
import { Container, Box, IconButton, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";

import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

export const Input = () => {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "392px",
          height: "64px",
          backgroundColor: "#F6F6F6",
          borderRadius: "4px",
          display: "flex",
          gap: 1,
          padding: "8px 20px ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PersonOutlineOutlinedIcon />
        </Box>
        <Box sx={{ width: "264px", height: "37px" }}>
          <Typography fontWeight={400} fontSize={12} color={"#888A99"}>
            Tanii ner
          </Typography>
          <Typography fontWeight={400} fontSize={16} color={"#0D1118"}>
            Bilguun
          </Typography>
        </Box>
        <IconButton>
          <ModeEditOutlinedIcon sx={{ color: "#18BA51" }} />
        </IconButton>
      </Box>
    </Container>
  );
};
