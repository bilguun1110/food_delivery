import { Request, Response } from "express";
import { getCategoriesQuery } from "../../quary/category/get-categories";

export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoriesQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
