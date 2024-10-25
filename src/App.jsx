import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Preloader from './Components/Preloader/Preloade.jsx'; // Import the Preloader component
import { ContextProvider } from './Contexts/StoreContext.jsx';


// Lazy load the pages
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
import Registration from './Pages/Registration/Registration.jsx';  // Direct import
import Event from './Pages/Events/Event.jsx';    

function App() {
  return (  
    <ContextProvider>
      <Navbar />
      <div className="app">
        {/* Suspense component displays the Preloader until the route component is ready */}
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/events" element={<Event />} />
          </Routes>
        </Suspense>
      </div>
    </ContextProvider>
  );
}

export default App;
