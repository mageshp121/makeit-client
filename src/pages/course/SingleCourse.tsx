import React from 'react'
import Navbar from '../../components/Navabar/Navbar'
import SingleCourseViewUser from '../../components/Course/singleCourseView.user'
import Navbottom from '../../components/NavBottom/Navbottom'

function SingleCourse() {
  return (
    <>
    <Navbar users={{
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: 0,
        password: '',
        roll: '',
        otpVerify: false
      }}/>
      <div className='pt-12'>
      <Navbottom Title={"Course"} subTitle={'Get your course from here'} />
      </div>
    <div className='pl-8 pt-5 m-3 h-[80rem] '>
    <SingleCourseViewUser/>
    </div>
    </>
      
  )
}

export default SingleCourse