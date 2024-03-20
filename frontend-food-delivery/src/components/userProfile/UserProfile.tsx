import React from "react";
import { Container, Box } from "@mui/material";
import { Photo } from "./Photo";
import { Input } from "./Input";

export const UserProfile = () => {
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
          paddingLeft: "330px",
          gap: 2,
        }}
      >
        <Input />
        <Input />
        <Input />
      </Box>
    </Container>
  );
};
