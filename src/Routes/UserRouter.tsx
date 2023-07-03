import { Link, Outlet, Route,Routes } from 'react-router-dom'

import { ProtectedRoute } from '../Routes/ProtectedRoute'
import Register from '../components/Authentication/Register'
import Login from '../components/Authentication/Login'
// import Otp from '../components/Authentication/otp'

import Home from '../pages/Home/Home'
import OTP from '../components/Authentication/Otp'
import Eor from '../pages/Error/Eor'
import Auth from '../pages/Auth/Auth'
import { ErrorComponent } from '../components/ErrorComponents/ErrorComponent'

// function Auth() {
//   return (
//     <Routes>
//       <Route path="/" element={<Register />} />
//       <Route path="login" element={<Login />} />
//       <Route path="otp" element={<OTP />} />
//       <Route path="*" element={<Eor />} /> // Catch-all route for non-existent nested routes
//     </Routes>
//   );
// }






function UserRouter() {
  return (
    <Routes>
      <Route path="auth/*" element={
         
            <Auth />
          
        }>
        <Route index element={<Register />} />
        <Route path='login' element={<Login/>}/>
        <Route path='otp' element={<OTP/>}/>
        <Route path='*' element={<ErrorComponent data={{path:'/auth',Message:'Sorry the provided url is not valied'}} />}/>
        </Route>
      <Route path="/" element={<ProtectedRoute path="/" element={<Home/>} />}/>
   </Routes>
  )
}

export default UserRouter