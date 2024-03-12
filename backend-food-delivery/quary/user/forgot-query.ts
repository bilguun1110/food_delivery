import NodeMailer from "nodemailer";
import { UserModel } from "../../db";
import { Request, Response } from "express";
import { getUserByEmail } from "../../util";

export const ForgotPasswordQuery = async (req: Request, res: Response) => {
  const { email } = req.body;

  const isUser = await getUserByEmail(email);

  if (!isUser) {
    throw new Error("Email not found");
  }

  const transporter = NodeMailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "binderiyabilguun@gmail.com",
      pass: "xhzrdhtfhdwxopad",
    },
  });

  const code = Math.floor(Math.random() * 10000);
  console.log(code);

  const options = {
    from: "binderiyabilguun@gmail.com",
    to: email,
    subject: "hello",
    text: `Verification for ${email}
    Your code is: ${code}`,
  };

  await UserModel.findOneAndUpdate({ email: email }, { $set: { OTB: code } });

  await transporter.sendMail(options);
};
