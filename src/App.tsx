import { Route, Routes,Navigate } from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Otp from "./pages/Otp/otp";
import Eor from "./pages/Error/Eor";
import { MainLayout } from "./Routes/MainLayOut";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
import UserRouter from "./Routes/UserRouter";
import UserProfiile from "./pages/UserProfile/UserProfile";
import Course from "./pages/Cours/Course";

function App() {
 
  
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/*" element={<ProtectedRoute path="/*" element={<MainLayout><UserRouter/></MainLayout>} />}/>
      <Route path="/Profile" element={<ProtectedRoute path="/" element={<MainLayout><UserProfiile/></MainLayout>} />}/>
      <Route path="/Course" element={<ProtectedRoute path="/" element={<MainLayout><Course/></MainLayout>} />}/>
      
      <Route path="*" element={<Eor />} />
    </Routes>
  ); 
}

export default App;
