import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Preloader from './Components/Preloader/Preloader.jsx'

import Home from './Pages/Home/Home.jsx';
import Event from './Pages/Events/Event.jsx';
import CheckoutPage from './Pages/Checkout/Checkout.jsx';
import SuccessPage from './Pages/SuccessPage/SuccessPage.jsx'

import Footer from './Components/Footer/Footer.jsx'

import ScrollToTop from './ScrolltoTop.jsx';

import { ContextProvider } from './Contexts/StoreContext.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Modified loading logic
    const handleLoad = () => setIsLoading(false);
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback timer in case load event doesn't fire
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ContextProvider>
      {isLoading ? (
        <Preloader/>
      ) : (
        <>
          <div className="app">
          <Navbar />
            <ToastContainer />
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/events" element={<Event />} />
              <Route path="/success" element={<SuccessPage/>}/>
              <Route path="*" element={<h1>not found page</h1>} />
            </Routes>
            
          </div>
          <Footer/>
          
          
        </>
      )}
    </ContextProvider>
  );
}

export default App;