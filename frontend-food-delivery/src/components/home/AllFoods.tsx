"use client";

import axios from "axios";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useContext, useState } from "react";
import React from "react";
import { Modals } from "./Modal";
import { Modal, Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import { MouseEvent } from "react";

export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
  id: string;
};

export const AllFoods = ({ data }: { data: FoodType[] }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getFood, setGetFood] = useState<FoodType>({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: "",
    id: "",
  });

  const getIdHandle = async (event: MouseEvent<HTMLDivElement>) => {
    const { id: foodId } = event.currentTarget;

    const foundFood = data.find(({ _id }) => _id === foodId);

    if (foundFood) setGetFood(foundFood);
    handleOpen();
  };

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
             Бүх хоол
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
          <Button>
            <Typography fontSize={14} fontWeight={400}>
              Бүгдийг харах
            </Typography>
          </Button>

          <ArrowForwardIosRoundedIcon sx={{ width: "15px", height: "30px" }} />
        </Box>
      </Box>

      <Box
        sx={{
          borderWidth: "0px",
          width: "100%",
          marginBottom: "120px",

          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "15px",
        }}
      >
        {data?.map((el, index: number) => (
          <Box
            onClick={getIdHandle}
            id={el._id}
            key={index}
            sx={{
              width: "282px",
              height: "256px",
              gap: "14",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
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
                  {el.price}₮
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
      >
        <Modals handleClose={handleClose} getFood={getFood} />
      </Modal>
    </Container>
  );
};
