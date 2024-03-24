import React from "react";
import { Box, Typography, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const Inputs = () => {
  return (
    <Box>
      <Typography fontSize={16} fontWeight={400}>
        Хаяг аа оруулна уу?
      </Typography>
      <InputLabel id="demo-simple-select-autowidth-label">
        Дүүрэг сонгоно уу
      </InputLabel>
      <Select
        label="Дүүрэг сонгоно уу"
        sx={{ width: "384px" }}
        placeholder="Дүүрэг сонгоно уу"
      >
        <LocationOnOutlinedIcon />
        <MenuItem>bayngol</MenuItem>
      </Select>
    </Box>
  );
};
