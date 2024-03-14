import { Request, Response } from "express";
import { getFoodsQuery } from "../../quary";

export const getFoodsController = async (req: Request, res: Response) => {
  try {
    const foods = await getFoodsQuery();
    res.send(foods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
