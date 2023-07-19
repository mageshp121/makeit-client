import client from "../baseUrl/axios.baseUrl";
import {
  FetchCourseData_With_TutorId,
  FetchLessons_With_Courseid,
  FetchCourse_By_Id,
  Fetch_all_Courses,
  getUserById
} from "../endPoints/commen";

export const getAllCourses_by_tutorId = async () => {
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

export const getAllCourses =async () =>{
try {
 const data = await client().get(Fetch_all_Courses);
 return data
} catch (error) {
   return error
}
}

export const getuserBYId = async (id:string) =>{
  try {
    const data = await client().get(getUserById+id);
    return data
  } catch (error) {
    return error
  }

}