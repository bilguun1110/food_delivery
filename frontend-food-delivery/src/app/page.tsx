import Image from "next/image";
import { Box } from "@mui/material";
import { Background } from "@/components/home/Background";
import { HomeCards } from "@/components/home/HomeCards";
import { AllFoods } from "@/components/home/AllFoods";

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
        <AllFoods />
      </Box>
    </Box>
  );
}
