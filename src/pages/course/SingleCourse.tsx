import React from 'react'
import Navbar from '../../components/Navabar/Navbar'
import SingleCourseViewUser from '../../components/Course/singleCourseView.user'
import Navbottom from '../../components/NavBottom/Navbottom'
import { useSelector } from 'react-redux'
import { usersProp } from '../../utils/types/types'

function SingleCourse() {
  const userdata:usersProp = useSelector((store:any)=>{
    return store.user.userData
   })
  return (
    <>
   
    <Navbar users={userdata}/>
    <div className='pl-8 pt-24  h-[88rem] '>
    <SingleCourseViewUser/>
    </div>
    </>
      
  )
}

export default SingleCourse