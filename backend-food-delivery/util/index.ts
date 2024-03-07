import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);
  const hash = await bcrypt.hashSync(password, salt);

  return hash;
};

export const compareHash = (password: string, hash: string) => {
  const isTrue = bcrypt.compareSync(password, hash);
  return isTrue;
};

export const tokenGenerate = async (userId: string) => {
  const token = await jwt.sign({ userId }, "secret", { expiresIn: "1d" });
  return token;
};