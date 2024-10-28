import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'

import Home from './Pages/Home/Home.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import Event from './Pages/Events/Event.jsx'
import CheckoutPage from './Pages/Checkout/Checkout.jsx'

import { ContextProvider } from './Contexts/StoreContext.jsx'

function App() {
  return (  
    <ContextProvider>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/events' element={<Event />} />
        </Routes>

      </div>
    </ContextProvider>
  );
}

export default App;
