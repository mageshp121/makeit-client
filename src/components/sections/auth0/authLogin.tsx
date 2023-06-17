import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={()=> loginWithRedirect()} className="flex gap-3 justify-center px-5 py-4 w-full font-semibold tracking-tight bg-gray-100 hover:bg-gray-200 rounded-md focus:ring-4 focus:ring-indigo-300 transition duration-200">
      <img
        className="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span >Login with Google</span>
    </button>
  );
};

export default LoginButton;
