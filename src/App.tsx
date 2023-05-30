import Home from './pages/Home/Home'
import Register from './pages/Register/register'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
    </>
  )
}

export default App
