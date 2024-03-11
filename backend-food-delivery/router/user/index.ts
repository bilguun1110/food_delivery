import { Router } from "express";
import { ForgotController, createUserController } from "../../controllers/user";
import { loginController } from "../../controllers/user/login";

export const useRouter = Router();

useRouter.post("/signup", createUserController);

useRouter.post("/login", loginController);

useRouter.post("/forgot", ForgotController);
