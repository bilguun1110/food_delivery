import React from "react";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";

export const NoItem = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "100px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Image src="/notfound.png" width={100} height={100} alt="" />
        <Typography color={"#8B8E95"}>Уучлаарай илэрц олдсонгүй...</Typography>
      </Box>
    </Container>
  );
};
