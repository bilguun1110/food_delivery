import { Request } from "express";
import { FoodModel, OrderModel, UserModel } from "../../db";
import { create } from "ts-node";
import { ORDER_PROCESS } from "../../constants";

const getFoodPrice = async (foodIds: string[]) => {
  const prices = Promise.all(
    foodIds.map(async (el) => {
      const result = await FoodModel.findById({ _id: el });
      return result?.price;
    })
  );

  return prices;
};

export const createOrderQuery = async (req: Request) => {
  const { userId, foods, khoroo, district, apartment } = req.body;

  const isUserExist = await UserModel.findById({ _id: userId });

  if (!isUserExist) {
    throw new Error("User not found");
  }

  const earlyToday = new Date();
  earlyToday.setHours(0, 0, 0, 0);

  const now = new Date();

  const howManyAreThere = await OrderModel.countDocuments({
    createAt: {
      $gte: earlyToday,
      $lte: now,
    },
  });

  const totalPrice = await getFoodPrice(foods);
  console.log(totalPrice);

  const sumTotalPrice = totalPrice.reduce(
    (accumulator: number, currentValue) => accumulator + Number(currentValue),
    0
  );
  console.log(sumTotalPrice, "total");
  console.log(howManyAreThere, "how many there");
  console.log(foods, "foods");
  console.log(userId, "userId");

  const result = await OrderModel.create({
    userId,
    foods,
    khoroo,
    district,
    apartment,
    orderNumber: howManyAreThere + 1,
    totalPrice: sumTotalPrice.toString(),
    process: ORDER_PROCESS.PENDING,
  });

  return result;
};
