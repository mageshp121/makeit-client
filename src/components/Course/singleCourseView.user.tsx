import React from 'react'
import CourseCard from './CourseCard'
import CardUpper from '../common/CardUpper'

export default function SingleCourseViewUser() {
  return (
    <>
    <div className='flex mt-5'>
    <div className='w-[20%]  fixed  mt-4  h-[40rem] shadow-md  bg-white'>

    </div>
    <div className='w-[80%] h-[43rem] mt-4 ml-80'>
    <div >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='w-[100%] overflow-auto h-[43rem]'>
           <CourseCard/>
        </div>
      </div>
    </div>
    </div>
    </div>
       
    </>
  )
}
