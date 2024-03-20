"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import { FoodType } from "@/app/page";
import axios from "axios";

type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};

type Success = {
  foods: DataType;
};

export const CategoryFoods = (props: Success) => {
  const { foods } = props;
  return (
    <Box
      sx={{
        borderWidth: "0px",
        width: "100%",
        marginBottom: "120px",
        marginTop: "85px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px",
      }}
    >
      {foods.foodId.map((el, index: number) => (
        <Box
          onClick={() => console.log(el._id)}
          key={index}
          sx={{
            width: "282px",
            height: "256px",
            gap: "24px",
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
            <Image src={el.image} alt="" width={296} height={186} />
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "56px",
              marginLeft: "10px",
            }}
          >
            <Typography fontSize={18} fontWeight={600}>
              {el.name}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography fontSize={18} color={"#18BA51"} fontWeight={600}>
                {el.price}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
