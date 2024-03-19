"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Button, Typography } from "@mui/material";
import { CategoriesType } from "@/app/menu/page";
import { FoodType } from "@/app/page";
import Image from "next/image";
import { MouseEvent } from "react";
import { CategoryFoods } from "./CateogryFoods";

const style = {
  width: "280px",
  height: "43px",
  borderRadius: "8px",
  border: "solid",
  borderColor: "gray",
  fontWeight: "500",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  color: "black",
  justifyContent: "center",
};

export type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};

export const Categories = ({ result }: { result: CategoriesType[] }) => {
  // const [id, SetId] = useState<string>("");
  const [foods, setFoods] = useState<DataType>({
    name: "",
    foodId: [],
    id: "",
  });

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const { id: categoryId } = event.currentTarget;

      const { data } = await axios.post<DataType>(
        "http://localhost:8000/category",
        { id: categoryId }
      );
      console.log(data, "data");

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(foods, "aa");

  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", gap: 3, marginTop: 5 }}>
        {result.map((el, index: number) => (
          <Button key={index} sx={style} id={el.id} onClick={handleClick}>
            {el.name}
          </Button>
        ))}
      </Box>

      <CategoryFoods foods={foods} />
    </Container>
  );
};
