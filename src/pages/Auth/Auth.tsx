import Register from "../../components/Authentication/Register";
import Login from "../../components/Authentication/Login";
import Navbottom from "../../components/NavBottom/Navbottom";
import Navbar from "../../components/Navabar/Navbar";
import OTP from "../../components/Authentication/Otp";
import { Outlet } from "react-router-dom";
import React from "react";






const Auth = () => {
  return (
    <>
    <Navbar />
    <Navbottom name={"Authenticaton"} />
    <Outlet/>
    </>
  );
};
export default Auth;
