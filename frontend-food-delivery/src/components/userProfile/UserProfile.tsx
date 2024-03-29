"use client";
import React, { useState, useContext } from "react";
import { Container, Box, Typography, IconButton, Button } from "@mui/material";
import { Photo } from "./Photo";
import { Inputs } from "./Input";
import { Input2 } from "./Input2";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useRouter } from "next/navigation";
import { UserContext } from "@/provider/UserProvider";
import Modal from "@mui/material/Modal";

const style = {
  width: "50%",
  height: "61px",
  fontWeight: "600",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottomRightRadius: "20px",
  cursor: "pointer",
};

export const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Inputs />

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
              <IconButton onClick={handleOpen}>
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
              <Typography
                style={{ cursor: "pointer" }}
                fontWeight={400}
                fontSize={16}
                color={"#0D1118"}
              >
                Гарах
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 384,
            height: 228,
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              height: "55%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
              fontSize: "20px",
              textAlign: "center",
              p: 3,
            }}
          >
            Та системээс гарахдаа итгэлтэй байна уу?
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "61px",
              display: "flex",
              borderRadius: "20px",
              backgroundColor: "red",
              bgcolor: "#18BA51",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "61px",
                fontWeight: "600",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray-500",
                borderBottomLeftRadius: "20px",
                bgcolor: "#8AFF8A",
                cursor: "pointer",
              }}
              onClick={exitHandle}
            >
              Тийм
            </Box>
            <Typography
              onClick={handleClose}
              sx={style}
              color={"white"}
              bgcolor={" #18BA51"}
            >
              Үгүй
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};
