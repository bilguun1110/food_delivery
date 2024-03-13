import { Request, Response } from "express";
import { getLoggedInQuery } from "../../quary/user/getLoggedIn-query";

export const loggedInController = async (req: Request, res: Response) => {
  try {
    const user = await getLoggedInQuery(req, res);
    res.send({ user });
  } catch (error: any) {
    res.send(error.message);
  }
};
