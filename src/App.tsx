import Home from './pages/Home/Home'
import Login from './pages/Login/login'
import Otp from './pages/Otp/otp'
import Register from './pages/Register/register'
import { Routes, Route } from 'react-router-dom'
import './config/firebase';
import NavBar from './components/navBar'
import InvitationBar from './components/InvitationBar'
import Sidebar from './components/sideDashBoard'
import UserName from './components/userName'
import LeftPage from './pages/LeftSideBar/Leftpage'
import Post from './pages/Post/Post'
import ViewPost from './pages/Post/ViewPost'


function App() {
  return (

     <div className='h-screen  bg-slate-500 bg-gradient-to-br from-blue-300 to-white'>
      <div className='pt-6'>
      <NavBar/>
      {/* <Register /> */}
      {/* <Post/> */}
      <div className='flex flex-row'>
      </div>
      <div>
      </div>
      </div>
     <Routes>
     <Route path='/viewpost' element={<ViewPost /> } />
          {/* <Route path='/' element={<Register /> } />
          <Route path='/invitation' element={<InvitationBar /> } />
          <Route path='/side' element={<Sidebar /> } />
          <Route path='/user' element={<UserName /> } /> */}
          {/* <Route path='/Home' element={<Home />} />          
          <Route path='/Otp' element={<Otp /> } /> 
          <Route path='/login' element={<Login /> } />  */}
        </Routes>
     </div>
        
  )
}

export default App
