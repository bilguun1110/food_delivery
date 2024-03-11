"use client";

import { Box, Typography, Divider, Stack } from "@mui/material";
import Image from "next/image";

const names = [
  {
    name: "Нүүр",
  },
  {
    name: "Холбоо барих",
  },
  {
    name: "Хоолны цэс",
  },
  {
    name: "Үйлчилгээний нөхцөл",
  },
  {
    name: "Хүргэлтийн бүс",
  },
  {
    name: "Нууцлалын бодлого",
  },
];

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bottom: 0,
        insetInline: "0",
      }}
    >
      <Stack
        sx={{
          backgroundImage: "url('/bg.png')",
          width: "100%",
          height: "545px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Box sx={{ display: "flex", marginTop: "114px", gap: 1 }}>
          <Image src="/whiteLogo.png" alt="" width={32} height={27} />
          <Typography color="white" fontSize={20} fontWeight={700}>
            Food Delivery
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "95px" }}>
          {names.map((el, idx) => (
            <Typography
              key={idx}
              sx={{
                fontWeight: "590",
                fontSize: "16px",
                color: "white",
                borderBottom: 1,
              }}
            >
              {el.name}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: "18px" }}>
          <Image src="/facebook.png" alt="" width={35} height={35} />
          <Image src="/instagram.png" alt="" width={35} height={35} />
          <Image src="/twitter.png" alt="" width={35} height={35} />
        </Box>

        <Divider sx={{ borderColor: "white", width: "1200px" }} />
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>© 2024 Pinecone Foods LLC </Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
