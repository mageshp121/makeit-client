import { Link } from "react-router-dom";
import { useRefreshToken } from "../../utils/customHooks/hook";
import { useEffect } from "react";
function ProfileSection() {
  const refers  = useRefreshToken()
useEffect(()=>{

const ok = async ()=>{
      const data = await refers();
      console.log(data,'adhjasgdjhsagdahjashjsagdas');
      
}
ok
},[])

  return (
    <>
      <div className="flex rounded-2xl justify-center border w-80  bg-white hover:shadow-lg border-spacing-1  h-[43rem]">
        <div className="flex-row p-14 justify-center">
          <div className=" shadow-lg ml-10 cursor-pointer w-40 h-40  border bg-black rounded-full  overflow-hidden">
            <img className="" src="/images (1).jpeg" alt="" />
          </div>
          <div className="flex  justify-center">
            <div className="mt-6 flex-row justify-center ">
              <div className="w-60 mt-1 flex justify-center h-11">
                <h1 className="text-lg"> User@gmail.com</h1>
              </div>
              <div className="w-60 mt-3  py-2 flex justify-center bg-[#faf7f3] border hover:scale-105 rounded-lg shadow-md  h-11">
               <h1 className="hover:text-teal-500 cursor-pointer">Profile</h1>
              </div>
              <div className="w-60 mt-3  py-2 flex justify-center bg-[#faf7f3] border hover:scale-105 rounded-lg shadow-md  h-11">
               <h1 className="hover:text-teal-500 cursor-pointer">Image</h1>
              </div>
              <div className="w-60 mt-3  py-2 flex justify-center bg-[#faf7f3] border hover:scale-105 rounded-lg shadow-md  h-11">
              <h1 className="hover:text-teal-500 cursor-pointer">You'r Courses</h1>
              </div>
              <div   className="w-60 mt-3  py-2 flex justify-center bg-[#faf7f3] border hover:scale-105 rounded-lg shadow-md  h-11">
              <h1  className="hover:text-teal-500 cursor-pointer">Sales History</h1>
              </div>
              <div className="w-60 mt-3  py-2 flex justify-center bg-[#faf7f3] border hover:scale-105 rounded-lg shadow-md  h-11">
              <h1 className="hover:text-teal-500 cursor-pointer">Drafted Courses</h1>
              </div>
              <Link to={'/tutor/profile/coursebasic'} >
              <div className="w-60 mt-4  py-2 flex justify-center  bg-teal-600 border hover:scale-105 rounded-lg shadow-md  h-11">
              <h1 className=" text-white  cursor-pointer">Create new course</h1>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
