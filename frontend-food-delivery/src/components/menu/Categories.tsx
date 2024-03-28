"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Button, Typography } from "@mui/material";
import { CategoriesType } from "@/app/menu/page";
import { FoodType } from "@/app/page";
import Image from "next/image";
import { MouseEvent } from "react";
import { CategoryFoods } from "./CateogryFoods";

export type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
  _id: string;
};

export const Categories = ({ result }: { result: CategoriesType[] }) => {
  const [foods, setFoods] = useState<DataType>({
    name: "",
    foodId: [],
    id: "",
    _id: "",
  });

  useEffect(() => {
    async function fetchFood() {
      const categoryId = result[0].id;
      const { data } = await axios.post<DataType>(
        "http://localhost:8000/category",
        { id: categoryId }
      );
      setFoods(data);
      console.log(data, "data");
    }
    fetchFood();
  }, []);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const { id: categoryId } = event.currentTarget;

      const { data } = await axios.post<DataType>(
        "http://localhost:8000/category",
        { id: categoryId }
      );

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", gap: 3, marginTop: 5 }}>
        {result.map((el, index: number) => (
          <Box
            key={index}
            sx={{
              backgroundColor: `${el.id === foods._id ? "green" : "white"}`,
              borderRadius: "8px",
              width: "280px",
              height: "43px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                border: "solid",
                borderColor: "gray",
                fontWeight: "500",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                color: `${el.id === foods._id ? "white" : "black"}`,

                justifyContent: "center",
              }}
              id={el.id}
              onClick={handleClick}
            >
              {el.name}
            </Button>
          </Box>
        ))}
      </Box>

      <CategoryFoods foods={foods} />
    </Container>
  );
};
