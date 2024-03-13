"use client";

import React, { ChangeEvent } from "react";
import { Container, Box, Typography, InputBase } from "@mui/material";
import axios from "axios";
import { useState } from "react";

type Email = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Step_1 = (props: Email) => {
  const { handleChange } = props;

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "448px",
          height: "fit-content",
          marginTop: "170px",
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
        <Box>
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              И-мэйл
            </Typography>
            <InputBase
              name="email"
              sx={{
                padding: "8px 16px",
                bgcolor: "#F7F7F8",
                width: "384px",
                borderRadius: "4px",
                borderWidth: "1px",
                marginBottom: 2,
              }}
              placeholder="И-мэйл хаягаа оруулна уу"
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
