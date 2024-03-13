import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const getLoggedInQuery = async (req: Request, res: Response) => {
  const header = req.headers.authorization;

  if (!header) {
    res.send("aaa");
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

  const { email } = jwt.decode(token) as JwtPayload;
  console.log(email);

  if (!email) {
    throw new Error("wrong token");
  } else {
    return email;
  }
};
