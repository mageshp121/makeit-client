import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Post from '../pages/Post/Post'

function UserRouter() {
  return (
   <Routes>
    <Route path='/*' element={<Post/>}/>
    {/* <Route path='/profile' element={<Post/>}/> */}
   </Routes>
  )
}

export default UserRouter