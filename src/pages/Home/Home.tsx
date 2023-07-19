import React from 'react'
import Navbar from '../../components/Navabar/Navbar'
import HomeNabBottom from '../../components/NavBottom/HomeNabBottom'
import CourseCard from '../../components/Course/CourseCard'
import CardUpper from '../../components/common/CardUpper'

function Home() {
  return (
    <>
     <Navbar/>
     <HomeNabBottom/>
    <div className=' w-full shadow-2xl flex gap-5 mt-3 h-64 p-5'  >
      <div className="w-[25%] flex-auto ">
        <div className='flex justify-end pl-8 pt-12'>
        <img className='animate-bounce ' src="/footer-shape-2.png" alt="" />
        </div>
      </div>
      <div className=' w-[75%] flex-auto pt-5   '>
        <div className='flex  ml-11 mt-11 flex-col gap-5 '>
        <h1 className='flex-auto font-extralight  text-5xl' >
        Expand Your Career Opportunity
        </h1>
        <h1 className='ml-32 text-5xl font-extralight text-'>With Our Courses</h1>
        </div>
      </div>   
    </div>
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CardUpper/>
        <div className='w-[100%] overflow-auto h-[95rem]'>
           <CourseCard/>
        </div>
      </div>
    </div>
    
  
    
    </>
   
  )
}

export default Home