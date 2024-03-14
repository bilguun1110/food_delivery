import { FoodModel } from "../../db";

export const getFoodsQuery = async () => {
  const allFoods = await FoodModel.find();
  return allFoods;
};
