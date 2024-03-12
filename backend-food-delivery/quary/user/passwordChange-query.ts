import { Request } from "express";
import { passwordHash } from "../../util";
import { getUserByEmail } from "../../util";
import { UserModel } from "../../db";

export const passwordChangeQuery = async (req: Request) => {
  const { password, email } = req.body;

  const user = await getUserByEmail(email);

  const newPassword = await passwordHash(password);

  await UserModel.findOneAndUpdate(
    { email: email },
    { $set: { password: newPassword } },
    { new: true }
  );
  return "succes changed pass";
};
