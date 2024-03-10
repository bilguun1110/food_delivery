"use client";

import Container from "@mui/material/Container";
import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const Header = () => {
  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "57px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "1400px",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            paddingLeft: "24px",
          }}
        >
          <Image src="/Vector.png" alt="" width={32} height={26} />
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
              paddingLeft: 2,
              gap: 1,

              display: "flex",
              border: "solid",
              borderWidth: "1px",
            }}
          >
            <SearchIcon />
            <InputBase placeholder="Хайx" sx={{}} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              button: {
                fontSize: 22,
                fontWeight: 700,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <ShoppingBasketOutlinedIcon />
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                Сагс
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <PermIdentityIcon />
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                Нэвтрэх
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
