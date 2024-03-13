"use client";

import React, { ChangeEvent } from "react";
import {
  Container,
  Box,
  Typography,
  InputBase,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Password } from "@mui/icons-material";

type Password = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Step_3 = (props: Password) => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleChange } = props;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "448px",
          height: "fit-content",
          marginTop: "86px",
          display: "flex",
          flexDirection: "column",
          padding: 4,
          gap: 5,
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          fontSize={28}
          fontWeight={700}
        >
          Шинэ нууц үг зохиох
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Нууц үг
            </Typography>
            <InputBase
              name="password"
              sx={{
                padding: "8px 16px",
                bgcolor: "#F7F7F8",
                width: "384px",
                borderRadius: "4px",
                borderWidth: "1px",
                marginBottom: 2,
              }}
              onChange={handleChange}
              type={showPassword ? "password" : "text"}
              placeholder="*********"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Нууц үг давтах
            </Typography>
            <InputBase
              name="rePassword"
              sx={{
                padding: "8px 16px",
                bgcolor: "#F7F7F8",
                width: "384px",
                borderRadius: "4px",
                borderWidth: "1px",
                marginBottom: 2,
              }}
              onChange={handleChange}
              type={showPassword ? "password" : "text"}
              placeholder="*********"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
