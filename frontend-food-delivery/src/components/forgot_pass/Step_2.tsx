"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  InputBase,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";

type OTB = {
  setOTB: React.Dispatch<React.SetStateAction<string>>;
};

export const Step_2 = (props: OTB) => {
  const { setOTB } = props;
  const [showPassword, setShowPassword] = useState(false);

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
          Нууц үг сэргээх
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography>
            Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
          </Typography>
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Нууц үг сэргээх код
            </Typography>
            <InputBase
              sx={{
                padding: "8px 16px",
                bgcolor: "#F7F7F8",
                width: "384px",
                borderRadius: "4px",
                borderWidth: "1px",
                marginBottom: 2,
              }}
              onChange={(e) => setOTB(e.target.value)}
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
