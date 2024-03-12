"use client";

import { Box, Typography, Container } from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";

const data = [
  {
    image: "/sale1.png",
    percent: "20%",
    name: "Өглөөний хоол",
    price1: "14,800₮",
    price2: "16,800₮",
  },
  {
    image: "/sale2.png",
    percent: "20%",
    name: "Зайрмаг",
    price1: "4,800₮",
    price2: "6,800₮",
  },
  {
    image: "/sale3.png",
    percent: "20%",
    name: "Өглөөний хоол",
    price1: "24,800₮",
    price2: "26,800₮",
  },
  {
    image: "/sale4.png",
    percent: "20%",
    name: "Breakfast ",
    price1: "24,800₮",
    price2: "26,800₮",
  },
];

export const Discount = () => {
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
             Хямдралтай
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
        {data.map(({ image, percent, name, price1, price2 }, idx) => (
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
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  right: "16px",
                  top: "16px",
                  width: "69px",
                  height: "35px",
                  bgcolor: "#18BA51",
                  borderRadius: 4,
                  padding: "4px 16px",
                  borderColor: "white",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                <Typography fontSize={18} fontWeight={600} color={"white"}>
                  {percent}
                </Typography>
              </Box>
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
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography fontSize={18} color={"#18BA51"} fontWeight={600}>
                  {price1}
                </Typography>
                <Typography fontSize={18} fontWeight={600}>
                  {price2}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
