import { connectDb } from "./db/database";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { useRouter } from "./router";

const app = express();
app.use(cors());
app.use(express.json());
connectDb();
dotenv.config();

app.use(useRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
