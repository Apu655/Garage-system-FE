import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import AppointmentForm from './Pages/AppointmentForm/AppointmentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/appointmentForm" element={<AppointmentForm/>}/>
      </Routes>
      
    </div>
  )
}

export default App
