import { Route, Routes} from "react-router-dom";
import Eor from "./pages/Error/Eor";
import UserRouter from "./Routes/UserRouter";
import TutorRouter from "./Routes/TutorRouter";


function App() {
 
  
  
  return (
    <Routes>
      <Route path="/*" element={<UserRouter />} />
      <Route path="tutor/*" element={<TutorRouter />} />
      <Route path="*" element={<Eor />} />
    </Routes>
  ); 
}

export default App;
