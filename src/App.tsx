import { Route, Routes} from "react-router-dom";
import Eor from "./pages/Error/Eor";
import UserRouter from "./Routes/UserRouter";


function App() {
 
  
  
  return (
    <Routes>
      <Route path="/*" element={<UserRouter />} />
      <Route path="*" element={<Eor />} />
    </Routes>
  ); 
}

export default App;
