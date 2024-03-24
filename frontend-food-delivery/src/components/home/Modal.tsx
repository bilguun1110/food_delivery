"use client";
import React, { use, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { FoodType } from "./AllFoods";
import { json } from "stream/consumers";
import { log } from "console";

interface FuncProps {
  getFood: FoodType;
  handleClose: any;
}
type Basket = {
  foodId: FoodType;
};

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

export const Modals = (props: FuncProps) => {
  const { handleClose, getFood } = props;
  const [addFood, setAddFood] = useState<FoodType>({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: "",
    id: "",
  });
  const [countFood, setCountFood] = useState<string>("");
  const [quan, setQuant] = useState("");

  const plusFoodLocal = () => {
    const localItems = JSON.parse(localStorage.getItem("product") || "[]");
    console.log(localItems, "aa");

    if (localItems.length == 0) {
      let product = [getFood];
      localStorage.setItem("product", JSON.stringify(product));
    } else {
      setAddFood(getFood);
      localItems.push(addFood);
      setCountFood(localItems.length);
      localStorage.setItem("product", JSON.stringify(localItems));
    }
  };
  const minusFoodLocal = () => {
    const localItems = JSON.parse(localStorage.getItem("product") || "[]");
    localItems.splice(1, 1);
    localStorage.setItem("product", JSON.stringify(localItems));
    setCountFood(localItems.length);
  };
  const addFoodLocal = () => {
    if (countFood.length === 0) {
      let product = [getFood];
      localStorage.setItem("product", JSON.stringify(product));
    }
    handleClose();
  };

  return (
    <Box
      sx={{
        width: "981px",
        height: "540px",
        borderRadius: "16px",
        padding: "32px 32px",
        backgroundColor: "white",
        display: "flex",
        gap: "33px",
      }}
    >
      <Box>
        <Image
          src={getFood.image}
          width={400}
          height={400}
          style={{ width: "100%", height: "100%" }}
          alt="image"
        />
      </Box>
      <Box>
        <IconButton
          onClick={handleClose}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            marginLeft: "90%",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: "27px",
            width: "384px",
            height: "398px",
          }}
        >
          <Box>
            <Typography fontSize={28} fontWeight={700}>
              {getFood.name}
            </Typography>
            <Typography fontSize={18} fontWeight={600} color={"#18BA51"}>
              {getFood.price}₮
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={18} fontWeight={600}>
              Орц
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#F6F6F6",
                borderRadius: 1,
                padding: 1,
                fontWeight: "400",
                fontSize: "16px",
                width: "100%",

                color: "#767676",
              }}
            >
              {getFood.ingredients}
            </Typography>
          </Box>
          <Typography fontSize={18} fontWeight={600}>
            Too
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={buttonStyle} onClick={minusFoodLocal}>
              -
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              {countFood}
            </Typography>
            <Typography onClick={plusFoodLocal} sx={buttonStyle}>
              +
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#18BA51",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
            }}
            onClick={addFoodLocal}
          >
            Сагслах
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
