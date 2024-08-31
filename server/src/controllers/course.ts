import { Course } from "../models/courseModel.js";
import { Lecture } from "../models/lecture.model.js";

export const getAllCourses = async () => {
  const courses = await Course.find();

  return courses;
};

export const getAllCoursesByID = async (parent: any, arg: { id: string }) => {
  const course = await Course.findById(arg.id).populate("instructor");
  return course;
};

export const getAllLectures = async () => {
  const lectures = await Lecture.find();
  return lectures;
};

export const getCoursesOfUser = async (user: any) => {
  const courses = await Course.find({
    instructor: user._id,
  });
  return courses;
};
