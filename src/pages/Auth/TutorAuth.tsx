import React from 'react'
import Navbar from '../../components/Navabar/Navbar'
import Navbottom from '../../components/NavBottom/Navbottom'
import { Outlet } from 'react-router-dom'

function TutorAuth() {
  return (
    <>
    <Navbar />
    <Navbottom Title={"Authenticaton"} subTitle={'create your tutor account'} />
    <Outlet/>
    </>
  )
}

export default TutorAuth