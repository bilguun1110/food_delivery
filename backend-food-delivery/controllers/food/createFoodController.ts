import { Request, Response } from "express";
import { createFoodQuery } from "../../quary";
export const createFoodController = async (req: Request, res: Response) => {
  try {
    const food = await createFoodQuery(req);
    res.send(food);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
