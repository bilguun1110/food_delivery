import { Request, Response } from "express";
import { createOrderQuery } from "../../quary";

export const CreateOrderController = async (req: Request, res: Response) => {
  try {
    const food = await createOrderQuery(req);
    res.send(food);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
