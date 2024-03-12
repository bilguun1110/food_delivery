import { Request } from "express";
import { getUserByEmail } from "../../util";

export const newSecretCodeQuery = async (req: Request) => {
  const { email, OTB } = req.body;
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Хэрэлэгч олдсонгүй нууц код");
  }

  if (user.OTB === OTB) {
    return "Нууц код зөв байна";
  } else {
    throw new Error("Нууц код буруу байна");
  }
};
