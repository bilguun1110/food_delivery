"use client";

import { Box, Typography, Container } from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";

const data = [
  {
    image: "/salad1.png",
    name: "Чихэрлэг тахиа ",
    price1: "24,800₮",
  },
  {
    image: "/salad2.png",
    name: "Lunch",
    price1: "24,800₮",
  },
  {
    image: "/salad3.png",
    name: "Сэндвич",
    price1: "14,800₮",
  },
  {
    image: "/salad4.png",
    name: "Apple pie",
    price1: "34,800₮",
  },
];

export const Salad = () => {
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
            Салад ба зууш
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
