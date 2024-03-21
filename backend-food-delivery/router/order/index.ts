import { Router } from "express";
import { CreateOrderController } from "../../controllers";
export const orderRouter = Router();

orderRouter.post("/order", CreateOrderController);
