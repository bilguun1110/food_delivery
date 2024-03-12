import { Request, Response } from "express";
import { passwordChangeQuery } from "../../quary";

export const passwordChangeController = async (req: Request, res: Response) => {
  try {
    const user = await passwordChangeQuery(req);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
