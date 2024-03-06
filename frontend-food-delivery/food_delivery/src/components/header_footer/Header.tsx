"use client";

import Container from "@mui/material/Container";
import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const Header = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Image src="/Vector.png" alt="" width={32} height={26} />
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            paddingLeft: "24px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            НҮҮР
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            ХООЛНЫ ЦЭС
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            ХҮРГЭЛТИЙН БҮС
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "255px", gap: "20px" }}>
          <Box
            sx={{
              width: "260px",
              height: "40px",
              alignItems: "center",
              justifyItems: "center",
              borderRadius: "8px",

              display: "flex",
              border: "solid",
            }}
          >
            <SearchIcon />
            <Input placeholder="Хайx" sx={{}} />
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box sx={{ display: "flex" }}>
              <ShoppingBasketOutlinedIcon />
              <Typography>Сагс</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <PermIdentityIcon />
              <Typography>Нэвтрэх</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
