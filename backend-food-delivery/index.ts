// import { connectDb } from "./db/database";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { useRouter } from "./router";
import { connect, set } from "mongoose";
import { FoodRouter } from "./router/food";
dotenv.config();

const app = express();
const connect_string: string = process.env.CONNECTION_STRING || "";

const connectDb = async () => {
  set(`strictQuery`, false);
  await connect(connect_string);
};

app.use(cors());
app.use(express.json());
connectDb();
dotenv.config();

app.use(useRouter);
app.use(FoodRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
