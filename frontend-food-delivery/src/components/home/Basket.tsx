"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { FoodType } from "./AllFoods";
interface FuncProps {
  handleCloseBasket: (values: any) => void;
  gotFoods: FoodType[];
}

const buttonStyle = {
  width: "45px",
  height: "40px",
  borderRadius: "10px",
  backgroundColor: "#18BA51",
  color: "white",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Basket = (props: FuncProps) => {
  const { handleCloseBasket, gotFoods } = props;

  return (
    <Box
      sx={{
        width: "30%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "10px",
          marginBottom: 5,
        }}
      >
        <IconButton onClick={handleCloseBasket}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography fontWeight={900} fontSize={20}>
          Таны сагс
        </Typography>
      </Box>
      {gotFoods?.map((el, index: number) => (
        <Box
          sx={{
            borderTop: "solid",
            borderBottom: "solid",
            borderColor: "#f4f4f4 ",
            borderWidth: "2px",
          }}
          key={index}
        >
          <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
            <Image src={el.image} alt="" width={245} height={150} />
            <Box>
              <Typography fontSize={18} fontWeight={600}>
                {el.name}
              </Typography>
              <Typography fontSize={18} fontWeight={600} color={"#18BA51"}>
                {el.price}
              </Typography>
              <Typography fontSize={16} fontWeight={400} color={"#767676"}>
                {el.ingredients}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={buttonStyle}>-</Typography>
                <Typography fontSize={16} fontWeight={500}>
                  1
                </Typography>
                <Typography sx={buttonStyle}>+</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          padding: "10px 32px 30px 32px",
          gap: "10px",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography fontSize={18} color={"#5E6166"} fontWeight={400}>
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize={18} fontWeight={700}>
            34,800₮
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            backgroundColor: "#18BA51",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          {" "}
          Захиалах
        </Box>
      </Box>
    </Box>
  );
};
