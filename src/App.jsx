import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Preloader from './Components/Preloader/Preloader.jsx'

import Home from './Pages/Home/Home.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Event from './Pages/Events/Event.jsx';
import CheckoutPage from './Pages/Checkout/Checkout.jsx';
import Footer from './Components/Footer/Footer.jsx'

import { ContextProvider } from './Contexts/StoreContext.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or setup process here
    // For example, replace the timeout with actual data loading
    window.addEventListener("load", () => setIsLoading(false));

    return () => window.removeEventListener("load", () => setIsLoading(false));
  }, []);

  return (
    <ContextProvider>
      {isLoading ? (
        <Preloader/>
      ) : (
        <>
          <Navbar />
          <div className="app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/events" element={<Event />} />
            </Routes>
          <Footer/>
          </div>
        </>
      )}
    </ContextProvider>
  );
}

export default App;
