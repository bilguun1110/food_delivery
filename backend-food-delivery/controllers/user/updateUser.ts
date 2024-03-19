import { Request, Response } from "express";
import { updateUser } from "../../quary";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req);
    res.send({ user });
  } catch (error: any) {
    res.send(error.message);
  }
};
