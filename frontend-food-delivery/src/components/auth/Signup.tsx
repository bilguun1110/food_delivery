"use client";
import {
  Container,
  Box,
  InputBase,
  Button,
  Checkbox,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const input1 = [
  { title: " Нэр", name: "name", placeHolder: "Нэрээ оруулна уу" },
  { title: "И-мэйл", name: "email", placeHolder: "И-мэйл хаягаа оруулна уу" },
  { title: "Утас", name: "phone", placeHolder: "Утасаа оруулна уу" },
];
const input2 = [
  { title: " Нууц үг", name: "password", placeHolder: "Нууц үгээ оруулна уу" },
  {
    title: " Нууц үг давтах",
    name: "rePassword",
    placeHolder: "Нууц үгээ оруулна уу",
  },
];

type stateType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
};

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [bgColor, setBgColor] = useState("#EEEFF2");
  const [createdData, setCreatedData] = useState<stateType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState<string>("");
  const [passwordChecker, setPasswordChecker] = useState("");
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCreatedData({ ...createdData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUpHandler = async () => {
    try {
      if (createdData.password !== createdData.rePassword) {
        setPasswordChecker("wrong password");
      }
      const { data } = await axios.post(
        "http://localhost:8000/signup",
        createdData
      );
      console.log(data);
      setError(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "100px" }}
    >
      <Box
        sx={{
          width: "448px",
          height: "722px",
          marginTop: "74px",
          padding: 4,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "48px",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Box>
          {input1.map(({ title, name, placeHolder }, idx) => (
            <Box key={idx}>
              <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                {title}
              </Typography>
              <InputBase
                onChange={handleChange}
                name={name}
                sx={{
                  padding: "8px 16px",
                  bgcolor: "#F7F7F8",
                  width: "384px",
                  borderRadius: "4px",
                  borderWidth: "1px",
                  marginBottom: 2,
                }}
                placeholder={placeHolder}
              />
            </Box>
          ))}
        </Box>

        <Box>
          {input2.map(({ title, name, placeHolder }, idx) => (
            <Box key={idx}>
              <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                {title}
              </Typography>
              <InputBase
                name={name}
                sx={{
                  padding: "8px 16px",
                  bgcolor: "#F7F7F8",
                  width: "384px",
                  borderRadius: "4px",
                  borderWidth: "1px",
                  marginBottom: 2,
                }}
                onChange={handleChange}
                id="outlined-adornment-password"
                placeholder={placeHolder}
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
          ))}
        </Box>
        <Stack>{error && <Box sx={{ color: "red" }}> {error}</Box>}</Stack>

        <Box sx={{ marginTop: "48px" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "8px 16px 8px 0px",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Checkbox
              onClick={() => {
                setBgColor(bgColor ? "green" : "gray");
              }}
            />
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Box>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",

              color: "#1C20243D",
              width: "384px",
              padding: "8px 16x",
              borderRadius: "4px",
            }}
            style={{ backgroundColor: bgColor }}
            onClick={signUpHandler}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
