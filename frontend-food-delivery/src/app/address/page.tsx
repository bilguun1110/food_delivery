import React from "react";
import { Step_one } from "@/components/address/Step_one";
import { Container } from "@mui/material";

const addressPage = () => {
  return (
    <Container sx={{ marginTop: "48px" }}>
      <Step_one />
    </Container>
  );
};

export default addressPage;
