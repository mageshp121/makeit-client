import client from "../baseUrl/axios.baseUrl";
import { useAxiosePrivate } from "../../customHooks/hook";
import {
  FetchCourseData_With_TutorId,
  FetchLessons_With_Courseid,
  FetchCourse_By_Id,
  Fetch_all_Courses,
  getUserById,
  getUserByemail,
  getRefersh
} from "../endPoints/commen";

// export const useAllCourses_by_tutorId = async (controler:any) => {
//   const tutorId = "64acf4006742357551e55edd";
//   const axiosPrivet = useAxiosePrivate()
//   // try {
//   //   const data = await axiosPrivet.get(FetchCourseData_With_TutorId + tutorId,{
//   //        signal:controler.signal
//   //   });
//   //   return data;
//   // } catch (error) {
//   //   return error;
//   // }
// };

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

export const getUserByEmail =async(email:string)=>{
  const Useremail = encodeURIComponent(email);
  console.log(Useremail,'encoded email');
    try {
      const data = await client().get(getUserByemail+Useremail);
      console.log(data,'  <= user data => getUserByEmail ');
      return data
    } catch (error) {
      return error
    }
}

export const getRefreshToken = async (token:string) =>{
  const headers = {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
      try {
        const data = await client().get(getRefersh,{headers});
        console.log(data,'  <= access token => getRfresh ');
        return data
      } catch (error) {
        return error
      }

}