import { Request, Response } from "express";
import { newSecretCodeQuery } from "../../quary/user/newSecretCode-query";

export const newSecretCodeController = async (req: Request, res: Response) => {
  try {
    const user = await newSecretCodeQuery(req);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
