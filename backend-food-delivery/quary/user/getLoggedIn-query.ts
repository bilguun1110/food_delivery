import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const getLoggedInQuery = async (req: Request, res: Response) => {
  const header = req.headers.authorization;

  if (!header) {
    res.send("not found token");
    return;
  }
  interface JwtPayload {
    email: string;
  }
  const token = header.split(" ")[1];

  jwt.verify(token, "secret", (error) => {
    if (error) {
      throw new Error("invalid token");
    } else {
      console.log("valid token");
    }
  });

  const userId = jwt.decode(token) as JwtPayload;
  console.log(userId);

  if (!userId) {
    throw new Error("wrong token");
  } else {
    return userId;
  }
};
