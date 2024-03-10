import React from "react";
import { Step_1 } from "@/components/forgot_pass/Step_1";
import { Step_2 } from "@/components/forgot_pass/Step_2";
import { Step_3 } from "@/components/forgot_pass/Step_3";
import { Button, Box, Container } from "@mui/material";

const page = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Step_3 />
      <Box>
        <Button
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            bgcolor: "#EEEFF2",
            color: "#1C20243D",
            width: "384px",
            padding: "8px 16x",
            borderRadius: "4px",
            marginBottom: "75px",
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Box>
    </Container>
  );
};
export default page;
