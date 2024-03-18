import { Background } from "@/components/home/Background";
import { HomeCards } from "@/components/home/HomeCards";
import { AllFoods } from "@/components/home/AllFoods";
import axios from "axios";
import { error } from "console";
import { useRouter, usePathname } from "next/navigation";

export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

const getAllFoods = async () => {
  try {
    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8000/foods"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await getAllFoods();

  if (!data) {
    throw new Error("data irsengui aldaa garlaa");
  }

  return (
    <>
      <>
        <Background />
      </>
      <>
        <HomeCards />
      </>
      <>
        <AllFoods data={data} />
      </>
    </>
  );
}
