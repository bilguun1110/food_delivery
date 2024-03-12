"use client";

import React from "react";
import { Step_1 } from "@/components/forgot_pass/Step_1";
import { Step_2 } from "@/components/forgot_pass/Step_2";
import { Step_3 } from "@/components/forgot_pass/Step_3";
import { Button, Box, Container } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const [OTB, setOTB] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  console.log(email);

  const changeComponent = async () => {
    if (step === 0) {
      try {
        const result = await axios.post("http://localhost:8000/forgot", {
          email: email,
        });
        console.log(result);

        if (result.data === "Email not found") {
          setError("Email not found");
          setStep(0);
          return;
        }
        setError("");
        setStep(step + 1);
      } catch (error: any) {
        return error.message;
      }
    } else if (step === 1) {
      const { data } = await axios.post("http://localhost:8000/checker", {
        OTB: OTB,
      });
      if (data === "Нууц код зөв байна") {
        setError("");
        setStep(step + 1);
      } else {
        setError("Invalid Code");
      }
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        {step === 0 && <Step_1 setEmail={setEmail} />},
        {step === 1 && <Step_2 setOTB={setOTB} />},
        <Button
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            bgcolor: "#EEEFF2",
            color: "#1C20243D",
            width: "384px",
            padding: "8px 16x",
            borderRadius: "4px",
            marginLeft: "50px",
          }}
          onClick={changeComponent}
        >
          Үргэлжлүүлэх
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {error && <Box sx={{ color: "red" }}>{error}</Box>}
        </Box>
      </Box>
    </Container>
  );
};
export default page;
