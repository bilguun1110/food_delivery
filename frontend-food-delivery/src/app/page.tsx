import Image from "next/image";
import { Box } from "@mui/material";
import { Background } from "@/components/home/Background";
import { HomeCards } from "@/components/home/HomeCards";
import { Discount } from "@/components/home/Discount";
import { MainDish } from "@/components/home/MainDish";
import { Salad } from "@/components/home/Salad";
import { Dessert } from "@/components/home/Dessert";

export default function Home() {
  return (
    <Box>
      <Box>
        <Background />
      </Box>
      <Box>
        <HomeCards />
      </Box>
      <Box>
        <Discount />
      </Box>
      <Box>
        <MainDish />
      </Box>
      <Box>
        <Salad />
      </Box>
      <Box>
        <Dessert />
      </Box>
    </Box>
  );
}
