import { getALLUsers, getUserByID } from "../../controllers/user.js";
import {
  getAllCourses,
  getAllCoursesByID,
  getCoursesOfUser,
} from "../../controllers/course.js";

type SampleUserType = {
  name: string;
  age: number;
  gender: string;
};

const myusers: SampleUserType[] = [];

export const graphQLResolver = {
  Mutation: {
    newUser: (_: any, { name, age, gender }: SampleUserType) => {
      // console.log(name,age,gender);
      myusers.push({
        name,
        age,
        gender,
      });
      return "User added succesfully";
    },
  },
  Query: {
    users: getALLUsers,
    courses: getAllCourses,
    course: getAllCoursesByID,
  },
  Course: {
    instructor: async (parent: any) => {
      return await getUserByID(parent.instructor);
    },
    User: {
      courses: getCoursesOfUser,
    },
    Lecture: {
      videoUrl: (lecture: any) => {
        console.log(lecture.videoUrl);
      },
    },
  },
};
