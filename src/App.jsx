import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'

import Home from './Pages/Home/Home.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import Event from './Pages/Events/Event.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="app">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/events' element={<Event />} />
        </Routes>

      </div>
    </>
  )
}

export default App
