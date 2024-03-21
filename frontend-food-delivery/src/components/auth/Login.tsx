"use client";

import React from "react";
import {
  Container,
  Box,
  InputBase,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/provider/UserProvider";

export const Login = () => {
  const { setIsUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async () => {
    try {
      const result = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      setIsUser(true);

      if (result.data == "user not found" || result.data == "wrong password") {
        setError(result.data);
      } else {
        router.push("/");
        localStorage.setItem("token", result.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const jumpSignUp = async () => {
    router.push("/signup");
  };

  const jumpForgotPass = async () => {
    router.push("/forgot");
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "448px",
          height: "549px",
          marginTop: "168px",
          display: "flex",
          flexDirection: "column",
          padding: 4,
          gap: 5,

          marginBottom: "75px",
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          fontSize={28}
          fontWeight={700}
        >
          Нэвтрэх
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              И-мэйл
            </Typography>
            <InputBase
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{
                padding: "8px 16px",
                bgcolor: "#F7F7F8",
                width: "384px",
                borderRadius: "4px",
                borderWidth: "1px",
                marginBottom: 2,
              }}
              placeholder="И-мэйл хаягаа оруулна уу"
            />
          </Box>

          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Нууц үг
            </Typography>
            <InputBase
              value={password}
              sx={{
                padding: "8px 16px",
                bgcolor: "#F7F7F8",
                width: "384px",
                borderRadius: "4px",
                borderWidth: "1px",
                marginBottom: 2,
              }}
              onChange={(event) => setPassword(event.target.value)}
              id="outlined-adornment-password"
              placeholder="Нууц үг"
              type={showPassword ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "black",
                width: "150px",
                display: "flex",
                justifyContent: "end",
                marginRight: "23px",
              }}
              onClick={jumpForgotPass}
            >
              Нууц үг сэргээх
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {error && <Box sx={{ color: "red" }}>{error}</Box>}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              bgcolor: `${!email || !password ? "#EEEFF2" : "primary.main"}`,
              color: `${!email || !password ? "#1C2024" : "white"}`,
              width: "384px",
              padding: "8px 16x",
              borderRadius: "4px",
            }}
            disabled={!email}
            onClick={loginHandler}
          >
            Нэвтрэх
          </Button>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Эсвэл
          </Typography>
          <Button
            sx={{
              fontSize: "16px",

              fontWeight: "400",
              color: "black",
              width: "384px",
              padding: "8px 16x",
              borderRadius: "4px",
              borderColor: "green",
            }}
            variant="outlined"
            onClick={jumpSignUp}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
