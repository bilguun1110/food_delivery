"use client";

import Image from "next/image";
import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

export const Background = () => {
  return (
    <Box>
      <Stack
        sx={{
          backgroundImage: "url('bg.png')",
          width: "100%",
          height: "788px",
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            width: "384px",
            height: "224px",
            display: "flex",
            flexDirection: "column",
            marginTop: "277px",
            marginLeft: "120px",
          }}
        >
          <Typography
            color={"#FFFFFF"}
            sx={{
              width: "100%",
              height: "115px",
              fontSize: "55px",
              fontWeight: "600",
              lineHeight: "49.5px",
            }}
          >
            Pinecone Food delivery
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              borderWidth: "1.3px",
              width: "100%",
              marginBottom: "25px",
            }}
          />
          <Typography fontSize={22} fontWeight={700} color={"#FFFFFF"}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
