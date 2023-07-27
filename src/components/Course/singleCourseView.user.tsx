import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CardUpper from "../common/CardUpper";
// import SingleCourseHome from './SingleCourseHome'
import { getAllCourses } from "../../utils/api/methods/get";
import Shimmer from "../common/Shimmer";

export default function SingleCourseViewUser() {
  const [sample, setSample] = useState(10);
  // console.log(prop,'propsssss');

  const [courses, setCourses] = useState([]) as any;
  useEffect(() => {
    const fetData = async () => {
      const course: any = await getAllCourses();
      console.log(course.data);
      setCourses(course.data.slice(0, 6));
    };
    fetData();
  }, []);

  return (
    <>
      <div className="w-[75.5rem] ml-[5.5rem] pt-7 p-5  rounded-lg  shadow-md mr-16 h-40 border border-slate-50 bg-white">
        <div className="grid grid-cols-3 gap-48">
          {/* search by course starts */}

          <div>
            <h1 className="mb-3 ml-2 text-md">Search courses</h1>

            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="p-3 pl-10 block w-full border-gray-200 rounded-lg text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search for items"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* search by course ends */}

          {/* filter by category starts */}

          <div>
            <h1 className="mb-3 ml-2 text-md">Filter by category</h1>
            <div className="hs-dropdown relative inline-flex [--strategy:absolute]">
              <button
                id="hs-dropdown-right-but-left-on-lg"
                type="button"
                className="hs-dropdown-toggle w-44  py-3  inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-teal-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                Select Category
                <svg
                  className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 right-0 left-auto lg:right-auto lg:left-0 min-w-[16.5rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                aria-labelledby="hs-dropdown-right-but-left-on-lg"
              >
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Newsletter
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Purchases
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>
          </div>
          {/* filter by category ends */}

          {/* sort dropedown starts */}
          <div>
            <h1 className="mb-3 ml-2 text-md">Sort by price</h1>
            <div className="hs-dropdown relative inline-flex [--strategy:absolute]">
              <button
                id="hs-dropdown-right-but-left-on-lg"
                type="button"
                className="hs-dropdown-toggle w-44  py-3  inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-teal-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                Select price range
                <svg
                  className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 right-0 left-auto lg:right-auto lg:left-0 min-w-[16.5rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                aria-labelledby="hs-dropdown-right-but-left-on-lg"
              >
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Newsletter
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Purchases
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>
          </div>
          {/* sort dropedown end */}

          {/* card starts */}
          <div>
            <h1 className="mb-3 ml-1 text-md">Sort by Price</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between"></div>
      <div className="w-[100%]   ">
        <div className="mx-auto  max-w-7xl px-6 lg:px-8">
          <div className="w-[100%]  ">
            <div className="mt-4  ">
              <div className="mx-auto sm:grid-cols-4  grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 pt-5  lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {courses?.length !== 0 ? (
                  courses?.map((course: any) => (
                    <>
                      <div className="p-2 h-[25rem] ">
                        <img
                          src="/icvgops1gqcosgv3dxde.jpg"
                          alt=""
                          className="h-[50px] rounded-lg w-full object-cover sm:h-[200px]"
                        />
                        <div className="mt-3 flex justify-between text-sm">
                          <div>
                            <div className="mt-2">
                              <span className="text-gray-900 text-lg group-hover:underline group-hover:underline-offset-4">
                                Small Headphones
                              </span>
                            </div>
                            <div className=" ">
                              <p className="mt-1.5 max-w-[45ch] text-md text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quasi nobis, quia soluta
                                quisquam voluptatem nemo.
                              </p>
                              <div className="mt-3">
                                <p className="text-teal-600 text-lg">₹ 299</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex  justify-between w-full">
                          <div className="w-[100%] mt-5">
                            <button className="hover:shadow-2xl bg-teal-600 items-center justify-center w-full py-4 font-semibold tracking-wide text-gray-100 rounded-lg">
                              Enroll now
                            </button>
                          </div>
                          <div className="w-[20%] h-13 ml-9 mt-5 pt-3 rounded-lg  border shadow-md border-gray-400">
                            <div className=" ml-2">
                              <img
                                className="w-[80%] m"
                                src="shopping-bag.png"
                                alt="cart-image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <Shimmer />
                )}
                {/* card ends */}

                {/* paginatio bar starts */}

                <div className="w-[75rem] ml-3 rounded-lg  mr-16 h-20">
                  <nav className="flex justify-center  bg-white items-center rounded-lg  space-x-2">
                    <a
                      className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
                      href="#"
                    >
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="w-10 h-10 bg-teal-600 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
                      href="#"
                      aria-current="page"
                    >
                      1
                    </a>
                    <a
                      className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                      href="#"
                    >
                      2
                    </a>
                    <a
                      className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                      href="#"
                    >
                      3
                    </a>
                    <a
                      className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
                      href="#"
                    >
                      <span className="sr-only">Next</span>
                      <span aria-hidden="true">»</span>
                    </a>
                  </nav>
                </div>
                {/* paginatio bar end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
