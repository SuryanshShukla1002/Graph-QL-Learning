import { Course } from "../models/courseModel.js";
import { User } from "../models/userModel.js";

export const getALLUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUserByID = async (id: string) => {
  const user = await User.findById(id);
  Course.find({instructor:user?._id})
  return user;
};
