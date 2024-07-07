import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Home from "./pages/Home"
import './App.css'
import ProtectedRoute from "./Routes/ProtectedRoute"

import { Routes ,Route} from 'react-router-dom'

function App() {

  return (
<div className='p-4 h-screen flex items-center justify-center'>
<Routes>

  <Route path="/" element={
    <ProtectedRoute>
    <Home/>
    </ProtectedRoute>
    
    } />
  <Route path="/login" element={<Login/>} />
  <Route path="/signup" element={<Signup/>} />
 </Routes>
</div>
  )
}

export default App
