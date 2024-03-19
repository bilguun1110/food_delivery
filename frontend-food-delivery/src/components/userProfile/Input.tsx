import React from "react";
import { Paper, Box, IconButton, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

export const Input = () => {
  return (
    <Paper>
      <Box
        sx={{
          width: "392px",
          height: "64px",
          backgroundColor: "#F6F6F6",
          borderRadius: "4px",
          display: "flex",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
          }}
        >
          <PersonOutlineOutlinedIcon />
        </Box>
        <Box>
          <Typography fontWeight={400} fontSize={12} color={"#888A99"}>
            Tanii ner
          </Typography>
          <Typography fontWeight={400} fontSize={16} color={"#0D1118"}>
            Bilguun
          </Typography>
        </Box>
        <IconButton>
          <ModeEditOutlinedIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
