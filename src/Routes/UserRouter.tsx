import { Route,Routes } from 'react-router-dom'
import Post from '../pages/Post/Post'
import Login from '../pages/Login/login'
import Register from '../pages/Register/register'
import Otp from '../pages/Otp/otp'
import { ProtectedRoute } from './ProtectedRoute'
import { MainLayout } from '../components/sections/MainLayOut'
import UserProfiile from '../pages/UserProfile/UserProfile'
import Course from '../pages/Cours/Course'
import Home from '../pages/Home/Home'

function UserRouter() {
  return (
   <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="otp" element={<Otp />} />
      <Route path="/" element={<ProtectedRoute path="/" element={<MainLayout><Home/></MainLayout>} />}/>
      <Route path="Profile" element={<ProtectedRoute path="/" element={<MainLayout><UserProfiile/></MainLayout>} />}/>
      <Route path="Course" element={<ProtectedRoute path="/" element={<Course/>} />}/>
   </Routes>
  )
}

export default UserRouter