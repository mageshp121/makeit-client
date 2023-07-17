
import { useCourselessoneValidate } from "../../../utils/formvalidations/TurtorCourse/lessone";
import FormEror from "../../ErrorComponents/FormEror";

import { useSelector } from "react-redux";
import { CourseId, lessonState } from "../../../utils/types/types";
import { useDispatch } from "react-redux";
import { addLessone, clearLesson } from "../../../utils/ReduxStore/slices/lessoneSlice";
import { Create_lessone } from "../../../utils/api/methods/post";
import { clearCourse } from "../../../utils/ReduxStore/slices/courseSlice";
import { ErrorComponent } from "../../ErrorComponents/ErrorComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function LessoneForm() {
  const couseId = useSelector((store:CourseId)=>store.course?.courseData);
  const lessones = useSelector((store:lessonState)=> store.lessone?.lessoneDataOrder);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errroMessage,setErrorMessage] = useState('');
  const [refresh,setRefresh] = useState(''); 
  
  const { errors, handleSubmit,reset, register } = useCourselessoneValidate();
  const fromSubmit = async (data:any) => {
    if(couseId.length > 0){
        const formData = new FormData();
        const courseid = [...couseId]
        formData.append('lessoneContent',data.lessoneContent[0]);
        formData.append('lessoneTitle',data.lessoneTitle);      
        formData.append('lessoneOrder',lessones);
        formData.append('tutorId','64acf4006742357551e55edd');
        formData.append('courseId',courseid[0]);
        const response:any = await Create_lessone(formData);
        if(response.data){
          dispatch(addLessone());
          reset()
        }
    }else{
      console.log('invalied');
      const message = 'Alredy completed the upload or invalied credentials . If you want plaese create new Course OR Edite the current course '
      setErrorMessage(message)
    }
  };
 const handleReredux = ()=>{
     dispatch(clearCourse());
     dispatch(clearLesson());
     navigate('/tutor/profile')
 }

  return (
    <>
     {
        errroMessage && <ErrorComponent data={{path:'/tutor/profile',Message:errroMessage}}/>
       }
      <FormEror errors={errors} />
      <div className="w-[100%] bg-white h-[30rem] ">
        <form onSubmit={handleSubmit(fromSubmit)}>
          <div className="w-[100%] bg-white h-[18rem] p-5 gap-2 grid grid-cols-1">
            <div className="h-auto mt-5">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Lessone title
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("lessoneTitle")}
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload lessones content
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  type="file"
                  {...register("lessoneContent")}
                />
              </div>
              <div className="mb-5">
                <input
                  type="submit"
                  className="flex shadow-2xl bg-teal-600 items-center justify-center w-full py-4 mt-9 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg focus:shadow-outline focus:outline-none"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="ml-5 mr-5">
          <button
          onClick={handleReredux}
           className=" shadow-2xl bg-teal-600 items-center justify-center w-full py-4 mt-9 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg focus:shadow-outline focus:outline-none">
            Upload your lessones
          </button>
        </div>
      </div>
    </>
  );
}

export default LessoneForm;
