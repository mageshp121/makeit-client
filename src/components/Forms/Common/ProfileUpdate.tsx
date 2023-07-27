import { useAxiosePrivate } from "../../../utils/customHooks/hook";
import { useProfileUpdateValidate } from "../../../utils/formvalidations/Common/profileedit";
import { useSelector } from "react-redux";

const ProfileUpdate = () => {
  const { errors, handleSubmit, register } = useProfileUpdateValidate();
  const axiosPrivet =  useAxiosePrivate()
  const userdata: any = useSelector((store: any) => {
    return store.user.userData;
  });
  const formsubmit = async (Data: any) => {
    console.log(handleSubmit);
    console.log(Data, "<= profileUpdateSubmit =>");
    console.log("hdasdhasdhsajkhdjashdkjsahdkjshjk");
    
    

  };
  return (
    <>
      <div>
        <div className="w-[100%] bg-white  p-5 pl-10 rounded-lg h-[38rem] ">
          <form onSubmit={handleSubmit(formsubmit)}>
            <div className="w-[100%] bg-white  p-5 gap-2 grid grid-cols-2">
              <div className="h-auto mt-5">
                <div className="mb-5">
                  {errors.firstName ? (
                    <p className="text-red-600">{errors.firstName.message}</p>
                  ) : (
                    <>
                      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        First Name
                      </label>
                    </>
                  )}
                  <input
                    defaultValue={userdata.firstName}
                    type="text"
                    {...register("firstName")}
                    className="py-3 px-4 block  bg-slate-50 w-full border-gray-200 rounded-md text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>
                <div className="mb-5">
                  {errors.lastName ? (
                    <p className="text-red-600">{errors.lastName.message}</p>
                  ) : (
                    <>
                      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Last Name
                      </label>
                    </>
                  )}
                  <input
                    defaultValue={userdata.lastName}
                    type="text"
                    {...register("lastName")}
                    className="py-3 px-4 block  bg-slate-50 w-full border-gray-200 rounded-md text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>
                <div className="mb-5">
                  {errors.email ? (
                    <p className="text-red-600">{errors.email.message}</p>
                  ) : (
                    <>
                      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                    </>
                  )}

                  <input
                    defaultValue={userdata.email}
                    type="email"
                    {...register("email")}
                    className="py-3 px-4 block  bg-slate-50 w-full border-gray-200 rounded-md text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    Upload New Profile Image
                  </label>
                  {/* {errors?.ProfileImage && <p>{errors?.ProfileImage?.message}</p>} */}
                  <input
                    {...register("ProfileImage")}
                    className="block w-full text-sm  bg-slate-50 text-gray-900 border border-gray-300 rounded-lg cursor-pointer  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                </div>
              </div>
              <div className="h-auto mt-5 ml-28">
                <div className="mb-5 h-40">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    You'r previous profile image
                  </label>
                  <div className="w-60 overflow-hidden rounded-lg object-contain ">
                    <img className="h-60 w-60" src="/images (2).jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-5 ">
              <input
                type="submit"
                className="flex  shadow-2xl bg-teal-600 items-center justify-center w-full py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg focus:shadow-outline focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
