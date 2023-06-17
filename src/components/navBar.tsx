import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/ReduxStore/store/Store";
import { Selector } from "@reduxjs/toolkit";
import { userSlice } from "../utils/types/types";
// interface selector{
//   user:{userData:{firstName?:string}}
// }

const NavBar = () => {
  const userData =  useSelector((store:userSlice) => store.user.userData)
  console.log(userData,'userdata');
  
    return (
          <nav className="bg-white ml-6 mr-6 rounded-xl border-gray-200 dark:bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="src/images/network.png"
                  className="h-8 mr-3"
                  alt="make it logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  MakeIt
                </span>
              </a>
              <div className="flex items-center md:order-2">
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="src/images/Max-R_Headshot (1).jpg"
                    alt="user photo"
                  />
                </button>
                {/* Dropdown menu */}
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
             {/* <div className="bg-blue-400 w-28 h-14">
  
             </div> */}
              <div
                className="place-items-end pl-96 justify-between hidden  md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col font-medium  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 text-bold rounded hover:bg-black-100 md:hover:bg-black md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"                    aria-current="page"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-black-100 md:hover:bg-black md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                     JOBS
                    </a>
                    {userData?.firstName}
                  </li>
                  <li>
                    {/* <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-black-100 md:hover:bg-black md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"                  >
                      COURSES
                    </a> */}
                    <Link to='/Course'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-black-100 md:hover:bg-black md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700" >
                    COURSES
                    </Link>
                  </li>
                </ul>
                {/* <div className="bg-blue-400 w-28 h-2">
  
  </div> */}
              </div>
              
            </div>
           
          </nav>
        
        
    );
  }
  
  export default NavBar;
  