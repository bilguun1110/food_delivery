"use client";

import { Box, Typography, Container } from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";

const data = [
  {
    image: "/mainDish1.png",
    name: "Main Pizza ",
    price1: "34,800₮",
  },
  {
    image: "/mainDish2.png",
    name: "Food tart",
    price1: "22,800₮",
  },
  {
    image: "/mainDish3.png",
    name: "Өглөөний хоол",
    price1: "14,800₮",
  },
  {
    image: "/mainDish4.png",
    name: "Зутан шөл",
    price1: "17,800₮",
  },
];

export const MainDish = () => {
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
             Үндсэн хоол
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
