import React, { useEffect, useState } from "react";
// import { useAllCourses_by_tutorId } from "../../utils/api/methods/get";
import { Link, useNavigate } from "react-router-dom";
import { axiosPrivet } from "../../utils/api/baseUrl/axios.baseUrl";
import { FetchCourseData_With_TutorId } from "../../utils/api/endPoints/commen";
import { useAxiosePrivate } from "../../utils/customHooks/hook";
// import { useAxiosePrivate } from "../../utils/customHooks/hook";

     function Course() {
    const [courseData,setCourseData] = useState([]);
    const axiosPrivet = useAxiosePrivate()
    const navigate = useNavigate()
    useEffect(()=>{
      let  isMounted:boolean = true;
      const controler = new AbortController()
      const fn = async ()=>{
        // const courseRes:any = await useAllCourses_by_tutorId(controler);
        const tutorId = "64acf4006742357551e55edd";
        try {
          const courseRes = await axiosPrivet.get(FetchCourseData_With_TutorId+tutorId,{
               signal:controler.signal
          });
          isMounted  && setCourseData(courseRes.data);
        } catch (error) {
          navigate("/tutor/login")
          console.log(error);
        }
      }
     fn();
     return ()=>{
      isMounted = false
      controler.abort();
     }
     
    },[])
    if(courseData){
      console.log(courseData,'course data');
    }
     return (
       <>
       <div className="w-[100%] grid h-80 grid-cols-1 gap-5">
        {courseData && courseData.map((item:any)=>{
          return <Link to={`/tutor/profile/courseview/${item._id}`}
          key={item._id} >
          <div className="block h-80 p-8 border-gray-200 overflow-hidden hover:shadow-xl border bg-white rounded-lg ml-6 mr-6">
          <div className="flex flex-row gap-5  ">
            <div className={`w-[28rem] rounded-md flex justify-center h-[16rem] bg-cover bg-center bg-no-repeat p-2 `}>
              <img src={item.thumbNailImageS3UrlKey} alt="" />
            </div>
            <div className="flex flex-col  gap-3 justify-center">
          <div className=""> 
          <span className="inline-flex mr-5 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Course Active</span>
          <span className="inline-flex items-center rounded-md bg-cyan-50-400 px-2 py-1 text-xs font-medium text--700 ring-1 ring-inset ring-indigo-700-">Category : {item.Category}</span>
            </div>
               <h1 className="text-2xl ">{item.WorkingTitle}</h1>
               <h1 className="text-lg text-gray-600">{item.ShortDescription}</h1>
               <h1 className="text-lg text-gray-600">69,697 students enrolled</h1>
               <span className="text-2xl text-teal-600">₹{item.CoursePrice}</span>
            </div>
          </div>
      </div>
          </Link> 
        })}
      </div>
    </>
  );
}


export default Course;
