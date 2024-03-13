"use client";

import React, { ChangeEvent } from "react";
import { Step_1 } from "@/components/forgot_pass/Step_1";
import { Step_2 } from "@/components/forgot_pass/Step_2";
import { Step_3 } from "@/components/forgot_pass/Step_3";
import { Button, Box, Container } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type PasswordReset = {
  otp: string;
  email: string;
  password: string;
  rePassword: string;
};

const page = () => {
  const [userData, setUserData] = useState<Partial<PasswordReset>>({});
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const router = useRouter();

  const changeComponent = async () => {
    if (step === 0) {
      try {
        const result = await axios.post("http://localhost:8000/forgot", {
          email: userData.email,
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
        email: userData.email,
        OTB: userData.otp,
      });
      if (data === "Нууц код зөв байна") {
        setError("");
        setStep(step + 1);
      } else {
        setError("Invalid Code");
      }
    } else if (step === 2) {
      const { data } = await axios.post("http://localhost:8000/changer", {
        email: userData.email,
        password: userData.password,
      });
      if (userData.password !== userData.rePassword) {
        setError("wrong password");
      } else {
        setError("");
        router.push("/login");
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
        {step === 0 && <Step_1 handleChange={handleChange} />}
        {step === 1 && <Step_2 handleChange={handleChange} />}
        {step === 2 && <Step_3 handleChange={handleChange} />}
        <Button
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            backgroundColor: `${!userData.email ? "#EEEFF2" : "primary.main"}`,
            color: `${!userData.email ? "#EEEFF2" : "primary.contrastText"}`,
            width: "384px",
            padding: "8px 16x",
            borderRadius: "4px",
            marginLeft: "55px",
          }}
          disabled={!userData.email}
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
