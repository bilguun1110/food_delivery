import { Request } from "express";
import { getUserById } from "../../util";
import { UserModel } from "../../db";

export const updateUser = async (req: Request) => {
  const { _id, email, name, phone } = req.body;

  const user = await getUserById(_id);

  await UserModel.findOneAndUpdate(
    { _id: _id },
    { $set: { email: email, name: name, phone: phone } },
    { new: true }
  );
  return "Мэдээлэл амжилттай солигдлоо";
};
