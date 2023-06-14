import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex w-64 mb-4 cursor-pointer pt-2  ">
      <div className=" shadow-lg  justify-between rounded-xl border-e bg-white">
        <nav
          aria-label="Main Nav"
          className="mt-10 mb-10  w-72 flex flex-col space-y-1"
        >
          <a
            href="#"
            className="flex items-center overflow-hidden hover:scale-105 transition-transform duration-300 gap-2 rounded-lg bg-gray-100 px-4 py-2 hover:text-indigo-500"
          >
            <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5 opacity-75"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2L2 12h3v8h6v-6h4v6h6v-8h3L12 2z"
              />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </a>
          

          <Link
  to="/Profile"
  className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 opacity-75"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      clipRule="evenodd"
    />
  </svg>
  <span className="text-sm font-medium">Profile</span>
</Link>
          <a
            href="#"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">People</span>
          </a>
          <a
            href="#"
            className="flex items-center hover:scale-105 transition-transform duration-300 gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">Schedules</span>
          </a>
          <a
            href="#"
            className="flex items-center hover:scale-105 transition-transform duration-300 gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">Messages</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
