import { User } from "../models/userModel.js";

export const getALLUsers = async () => {
  const users = await User.find();
  return users;
};
