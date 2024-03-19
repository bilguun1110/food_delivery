import { Categories } from "@/components/menu/Categories";
import axios from "axios";
import { FoodType } from "../page";
import { CategoryFoods } from "@/components/menu/CateogryFoods";

export type CategoriesType = {
  name: string;
  foodId: string;
  id: string;
};

const MenuPage = async () => {
  const getCategories = async () => {
    try {
      const { data } = await axios.post<CategoriesType[]>(
        "http://localhost:8000/categories"
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const result = await getCategories();

  if (!result) {
    throw new Error("data irsengui aldaa garlaa");
  }

  return (
    <>
      <Categories result={result} />
      <></>
    </>
  );
};
export default MenuPage;
