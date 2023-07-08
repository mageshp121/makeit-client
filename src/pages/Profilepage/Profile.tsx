import React from 'react'
import Navbar from '../../components/Navabar/Navbar'
import Navbottom from '../../components/NavBottom/Navbottom'
import ProfileSection from '../../components/Profile/ProfileSection'
import Course from '../../components/Course/Course'

function Profile() {
  return (
    <>
    <div className=' h-[100rem]'>
    <Navbar/>
    <Navbottom Title={"Profile"} subTitle={'explore your profile'} />
    <div className='flex mt-8  ml-12'>
    <ProfileSection/>
   <div className='flex-auto overflow-auto justify-center mt-1 ml-8 mr-12 '>
   <Course/>
   </div>
    </div>
    </div>
    </>
  )
}

export default Profile