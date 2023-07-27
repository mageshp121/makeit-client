import React from "react";

function PurchasedCourses() {
  return (
    <div className="w-[100%]  bg-white  h-[rem]">
      <div className="h-[48rem] overflow-auto grid grid-cols-2 p-8 gap-8 justify-center  ">
        <article className="overflow-hidden border border-gray-300 bg-white h-[20rem] rounded-lg shadow-2xl transition hover:shadow-lg">
          <img
            alt="Office"
            src="/icvgops1gqcosgv3dxde.jpg"
            className="h-56 w-full  object-cover"
          />
          <div className="bg-white p-3 sm:p-1">
            <div className="mt-4 ml-4">
              <span className="text-xl">Microservice forn end</span>
            </div>
            <div className=" ml-3 mr-3 mt-3 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]">
                45% Completed
              </div>
            </div>
          </div>
        </article>
        
      </div>
    </div>
  );
}

export default PurchasedCourses;
