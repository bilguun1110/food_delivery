import { Request, Response } from "express";
import { loginQuery } from "../../quary";

export const loginController = async (req: Request, res: Response) => {
  try {
    const user = await loginQuery(req);
    res.send({ message: "success ", user });
  } catch (error: any) {
    res.send(error.message);
  }
};
