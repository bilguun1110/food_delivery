import { Model, model, Schema, models } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin?: boolean;
  createdAt: Date;
  updatedAt: Date;
  OTB: string;
};

const UserSchema = new Schema<UserModelType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: false },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  OTB: { type: String, required: true },
});

export const UserModel: Model<UserModelType> =
  models["Users"] || model("Users", UserSchema);
export const isEmailValid = UserSchema.index({ email: 1 }, { unique: true });
export const updateUserById = (_id: string) => UserModel.findByIdAndUpdate(_id);
