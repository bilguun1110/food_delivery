"use client";
import React, { useState, useContext } from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import { Photo } from "./Photo";
import { Input } from "./Input";
import { Input2 } from "./Input2";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useRouter } from "next/navigation";
import { UserContext } from "@/provider/UserProvider";

export const UserProfile = () => {
  const { setIsUser } = useContext(UserContext);
  const { push } = useRouter();
  const exitHandle = () => {
    localStorage.removeItem("token");
    setIsUser(false);
    push("/");
  };

  return (
    <Container>
      <Box>
        <Photo />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "end",
          marginTop: 5,

          gap: 2,
        }}
      >
        <Input />
        <Input />
        <Input />
        <Input2 />
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
              <IconButton onClick={exitHandle}>
                <ExitToAppOutlinedIcon />
              </IconButton>
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
                Гарах
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};
