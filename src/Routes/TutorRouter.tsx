import { Route, Routes } from 'react-router-dom'
import TutorLogin from '../components/Authentication/Tutor/Tutor.Login'
import TutorOtp from '../components/Authentication/Tutor/Tutor.Otp'
import { ErrorComponent } from '../components/ErrorComponents/ErrorComponent'
import TutorRegister from '../components/Authentication/Tutor/Tutor.Register'
import TutorAuth from '../pages/Auth/TutorAuth'
import Profile from '../pages/Profilepage/Profile'
import Course from '../components/Course/Course.tutor'
import CourseBasicForm from '../components/Forms/Tutor/CourseBasicForm'
import LessoneForm from '../components/Forms/Tutor/LessoneForm'
import SingleCourseView from '../components/Course/SingleCourseView.tutor'

function TutorRouter() {
  return (
    <Routes>
      <Route path="/" element={<TutorAuth/>}>
        <Route index element={<TutorRegister />} />
        <Route path='login' element={<TutorLogin/>}/>
        <Route path='otp' element={<TutorOtp/>}/>
        <Route path='*' element={<ErrorComponent data={{path:'/tutor',Message:'Sorry the provided url is not valied'}} />}/>
        </Route>
      <Route path='/profile' element={<Profile/>}>
        <Route index element={<Course/>}/>
        <Route path='coursebasic' element={<CourseBasicForm/>} />
        <Route path='courselesson' element={<LessoneForm/>}/>
        <Route path='courseview/:id' element={<SingleCourseView/>} />
      </Route>
   </Routes>
  )
}

export default TutorRouter