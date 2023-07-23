import React from 'react'
import Navbar from '../../components/Navabar/Navbar'
import SingleCourseViewUser from '../../components/Course/singleCourseView.user'

function SingleCourse() {
  return (
    <>
    <Navbar/>
    <div className='pl-8 pt-16 h-screen '>
    <SingleCourseViewUser/>
    </div>
    </>
      
  )
}

export default SingleCourse