import { Request } from "express";
import { UserModel } from "../../db/model/user";
import { passwordHash } from "../../util";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return "Мэдээлэл дутуу байна";
    }

    const hashedPassword = await passwordHash(password);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    return user;
  } catch (error: any) {
    return "Хэрэлэгч бүртгэгдсэн байна";
  }
};
