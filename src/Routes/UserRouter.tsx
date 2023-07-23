import { Link, Outlet, Route,Routes } from 'react-router-dom'

import { ProtectedRoute } from '../Routes/ProtectedRoute'
import Register from '../components/Authentication/User/Register'
import Login from '../components/Authentication/User/Login'
// import Otp from '../components/Authentication/otp'

import Home from '../pages/Home/Home'
import OTP from '../components/Authentication/User/Otp'
import Auth from '../pages/Auth/Auth'
import { ErrorComponent } from '../components/ErrorComponents/ErrorComponent';


function UserRouter() {
  return (
    <Routes>
      <Route path="auth/*" element={<Auth/>}>
        <Route index element={<Register />} />
        <Route path='login'element={<Login/>}/>
        <Route path='otp' element={<OTP/>}/>
        <Route path='*' element={<ErrorComponent data={{path:'/auth',Message:'Sorry the provided url is not valied'}} />}/>
      </Route>
      <Route path="/" element={<ProtectedRoute path="/" element={<Home/>} />}/>
   </Routes>
  )
}

export default UserRouter