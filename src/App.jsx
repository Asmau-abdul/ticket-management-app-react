import { useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import Signup from './pages/Auth/Signup.jsx'
import Hero from './components/Hero.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TicketManagement from './pages/TicketManagement.jsx'
import NewEvent from './pages/NewEvent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/ticketManagement' element={<TicketManagement/>}/>
            <Route path='/newEvent' element={<NewEvent/>}/>
          </Routes>
        </Router>
        {/* <Hero/> */}
      </div>
    </>
  )
}

export default App
