import { Router } from "express";
import {
  ForgotController,
  createUserController,
  passwordChangeController,
} from "../../controllers/user";
import { loginController } from "../../controllers/user/login";
import { newSecretCodeController } from "../../controllers/user/newSecretCode";

export const useRouter = Router();

useRouter.post("/signup", createUserController);

useRouter.post("/login", loginController);

useRouter.post("/forgot", ForgotController);

useRouter.post("/checker", newSecretCodeController);

useRouter.post("/changer", passwordChangeController);
