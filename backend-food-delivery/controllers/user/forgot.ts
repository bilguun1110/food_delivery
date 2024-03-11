import { Request, Response } from "express";
import { ForgotPasswordQuery } from "../../quary/user/forgot-query";

export const ForgotController = async (req: Request, res: Response) => {
  try {
    const user = await ForgotPasswordQuery(req, res);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
