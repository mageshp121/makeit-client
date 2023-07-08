import React from "react";

function Course() {
  return (
    <>
      <div className="w[100%] grid h-80 grid-cols-1 gap-5">
        {/* <div className="h-[25rem]   rounded-md   w-[100%]">
          <div className="h-[25rem] shadow-xl  rounded-md bg-white w-[20rem]">
            <div className="w-full rounded-md h-1/2 bg-cover bg-center bg-no-repeat  bg-[url('/microservices-training.png')] "></div>
            <div className="w-full flex flex-col gap-5 p-5 h-auto ">
              <div className="flex overflow-hidden ">
                <div className="w-[100%] text-xl break-words overflow-hidden"><span>Microservices with Node JS and React</span></div>
              </div>
              <div><span className="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
</div>
              <div className="flex overflow-hidden space-x-1 justify-between">
             <div>
                <h1>₹ 449</h1>
             </div>
             <div>
                <h1>price</h1>
             </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* component */}
        <div className="block p-8 shadow-xl overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6">
            <div className="flex flex-row gap-5  ">
              <div className="w-[20rem] rounded-md  h-[16rem] bg-cover bg-center bg-no-repeat  bg-[url('/microservices-training.png')] "></div>
              <div className="flex flex-col gap-3 justify-start">
              <span className="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
                 <h1 className="text-base">abcd</h1>
                 <h1 className="text-xl ">Fundamentals of Database Engineering</h1>
                 <h1 className="text-lg text-gray-100">Learn ACID, Indexing, Partitioning, Sharding, Concurrency control, Replication, DB Engines, Best Practices and More!</h1>
                 <span className="text-2xl text-teal-200">₹449</span>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Course;
