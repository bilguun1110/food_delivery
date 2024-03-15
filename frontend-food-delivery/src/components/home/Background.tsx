"use client";

import Image from "next/image";
import React from "react";
import { Box, Divider, Typography } from "@mui/material";

export const Background = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('bg.png')",
          width: "100wh",
          height: "788px",
          marginBottom: "120px",
          display: "flex",
          gap: "250px",
          paddingLeft: "380px",
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
        <Box
          sx={{
            marginTop: "170px",
            display: "flex",
            width: "588px",
            height: "438px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image alt="" src="/bg1.png" width={443} height={438} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              marginLeft: "275px",
              marginTop: "113px",
            }}
          >
            <Image alt="" src="/bg2.png" width={313} height={313} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
