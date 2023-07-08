import { Route, Routes } from 'react-router-dom'
import TutorLogin from '../components/Authentication/Tutor/Tutor.Login'
import TutorOtp from '../components/Authentication/Tutor/Tutor.Otp'
import { ErrorComponent } from '../components/ErrorComponents/ErrorComponent'
import TutorRegister from '../components/Authentication/Tutor/Tutor.Register'
import TutorAuth from '../pages/Auth/TutorAuth'
import Profile from '../pages/Profilepage/Profile'

function TutorRouter() {
  return (
    <Routes>
      <Route path="/" element={<TutorAuth/>}>
        <Route index element={<TutorRegister />} />
        <Route path='login' element={<TutorLogin/>}/>
        <Route path='otp' element={<TutorOtp/>}/>
        <Route path='*' element={<ErrorComponent data={{path:'/tutor',Message:'Sorry the provided url is not valied'}} />}/>
        </Route>
      <Route path='/profile' element={<Profile/>}/>
   </Routes>
  )
}

export default TutorRouter