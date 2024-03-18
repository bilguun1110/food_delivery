import { Router } from "express";
import { createFoodController, getFoodsController } from "../../controllers";

export const FoodRouter = Router();

FoodRouter.post("/foods", getFoodsController);

FoodRouter.post("/create-food", createFoodController);
