import bcrypt from "bcrypt";

export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);
  const hash = await bcrypt.hashSync(password, salt);

  return hash;
};

export const compareHash = (password: string, hash: string) => {
  const isTrue = bcrypt.compareSync(password, hash);
  return isTrue;
};
