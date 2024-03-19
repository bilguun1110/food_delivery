import { Router } from "express";
import {
  CreateCategoryController,
  getCategoriesController,
  getCategoryController,
} from "../../controllers/category";
export const CategoryRouter = Router();

CategoryRouter.post("/category/create", CreateCategoryController);

CategoryRouter.post("/category", getCategoryController);

CategoryRouter.post("/categories", getCategoriesController);
