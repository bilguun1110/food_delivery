import { UserModel } from "../../db";
import { Request } from "express";
import { compareHash, tokenGenerate } from "../../util";
const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const loginQuery = async (req: Request) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("user not found");
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    throw new Error("wrong password");
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
