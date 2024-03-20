import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../../util";
interface JwtPayload {
  email: string;
}

export const getLoggedInQuery = async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  try {
    if (!header) {
      res.send("not found token");
      return;
    }

    const token = header.split(" ")[1];
    const data: any = jwt.decode(token);

    const user = await getUserById(data.userId);
    console.log(user);

    jwt.verify(token, "secret", (error) => {
      if (error) {
        throw new Error("invalid token");
      } else {
        console.log("valid token");
      }
    });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
