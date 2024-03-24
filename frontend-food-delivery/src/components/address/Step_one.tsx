import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Blue_check } from "./Blue_check";
import { Inputs } from "./Inputs";
export const Step_one = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Blue_check />

        <Box>
          <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
            Алхам 1
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хаягийн мэдээлэл оруулах
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"#0468C8"}>
            Хүлээгдэж байна
          </Typography>
        </Box>
      </Box>
      <Box>
        <Inputs />
      </Box>
    </Box>
  );
};
