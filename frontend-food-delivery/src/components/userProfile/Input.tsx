import React from "react";
import { Container, Box, IconButton, Typography, Input } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { UserContext } from "@/provider/UserProvider";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useContext } from "react";

export const Inputs = () => {
  const { userData } = useContext(UserContext);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: "392px",
          height: "64px",
          backgroundColor: "#F6F6F6",
          borderRadius: "4px",
          display: "flex",
          gap: 1,
          padding: "8px 20px ",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #D6D8DB",
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PersonOutlineOutlinedIcon />
        </Box>
        <Box sx={{ width: "264px", height: "37px" }}>
          <Typography fontWeight={400} fontSize={12} color={"#888A99"}>
            Таны нэр
          </Typography>
          <Typography fontWeight={400} fontSize={16} color={"#0D1118"}>
            {userData.name}
          </Typography>
        </Box>
        <IconButton>
          <ModeEditOutlinedIcon sx={{ color: "#18BA51" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "392px",
          height: "64px",
          backgroundColor: "#F6F6F6",
          borderRadius: "4px",
          display: "flex",
          gap: 1,
          padding: "8px 20px ",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #D6D8DB",
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PersonOutlineOutlinedIcon />
        </Box>
        <Box sx={{ width: "264px", height: "37px" }}>
          <Typography fontWeight={400} fontSize={12} color={"#888A99"}>
            Утасны дугаар
          </Typography>
          <Typography fontWeight={400} fontSize={16} color={"#0D1118"}>
            {userData.phone}
          </Typography>
        </Box>
        <IconButton>
          <ModeEditOutlinedIcon sx={{ color: "#18BA51" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "392px",
          height: "64px",
          backgroundColor: "#F6F6F6",
          borderRadius: "4px",
          display: "flex",
          gap: 1,
          padding: "8px 20px ",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #D6D8DB",
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PersonOutlineOutlinedIcon />
        </Box>
        <Box sx={{ width: "264px", height: "37px" }}>
          <Typography fontWeight={400} fontSize={12} color={"#888A99"}>
            Имэйл хаяг
          </Typography>
          <Typography fontWeight={400} fontSize={16} color={"#0D1118"}>
            {userData.email}
          </Typography>
        </Box>
        <IconButton>
          <ModeEditOutlinedIcon sx={{ color: "#18BA51" }} />
        </IconButton>
      </Box>
    </Container>
  );
};
