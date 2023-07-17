import client from "../baseUrl/axios.baseUrl";
import { LessoneType,CourseRes } from "../../types/types";
import {
  FetchCourseData_With_TutorId,
  FetchLessons_With_Courseid,
  FetchCourse_By_Id,
} from "../endPoints/commen";

export const getAllCourses = async () => {
  const tutorId = "64acf4006742357551e55edd";
  try {
    const data = await client().get(FetchCourseData_With_TutorId + tutorId);
    return data;
  } catch (error) {
    return error;
  }
};

export const courseLessone = async (id: string) => {
    console.log(id,'iddddddd');
    
  try {
    const data = await client().get(FetchLessons_With_Courseid + id);
    return data;
  } catch (error) {
    return error;
  }
};

export const getCoursebyId = async (id: string) => {
    console.log(id,'iddddddd');
  try {
    const data = await client().get(FetchCourse_By_Id + id);
    return data;
  } catch (error) {
    return error;
  }
};
