import { Router } from "express";
import { createUserController } from "../../controllers/user";

export const useRouter = Router();

useRouter.post("/signup", createUserController);
