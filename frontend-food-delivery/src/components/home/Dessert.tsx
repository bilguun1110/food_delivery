"use client";

import { Box, Typography, Container } from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";

const data = [
  {
    image: "/dessert1.png",
    name: "Торт ",
    price1: "54,800₮",
  },
  {
    image: "/dessert2.png",
    name: "Oreo shake",
    price1: "14,800₮",
  },
  {
    image: "/dessert3.png",
    name: "Chocolate ",
    price1: "14,800₮",
  },
  {
    image: "/dessert4.png",
    name: "Yoghurt",
    price1: "14,800₮",
  },
];

export const Dessert = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <StarRoundedIcon
            sx={{ width: "32px", height: "32px", color: "#18BA51" }}
          />
          <Typography fontSize={22} fontWeight={700}>
            Амттан
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            color: "#18BA51",
            alignItems: "center",
          }}
        >
          <Typography fontSize={14} fontWeight={400}>
            Бүгдийг харах
          </Typography>
          <ArrowForwardIosRoundedIcon sx={{ width: "15px", height: "30px" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          borderWidth: "0px",
          marginBottom: "120px",
        }}
      >
        {data.map(({ image, name, price1 }, idx) => (
          <Box
            key={idx}
            sx={{
              width: "282px",
              height: "256px",
              gap: "14",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",

                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={image} alt="" width={296} height={186} />
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "56px",
                marginLeft: "10px",
              }}
            >
              <Typography fontSize={18} fontWeight={600}>
                {name}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography fontSize={18} color={"#18BA51"} fontWeight={600}>
                  {price1}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
