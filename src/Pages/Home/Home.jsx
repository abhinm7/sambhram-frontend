import React, { lazy, Suspense } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';

// Lazy load other components
const PopularEvents = lazy(() => import('../../Components/PopularEvents/PopularEvents'));
const EventTypes = lazy(() => import('../../Components/EventTypes/EventTypes'));
const Spotlight = lazy(() => import('../../Components/Spotlights/Spotlights'));

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <Spotlight/>
                <EventTypes/>
                <PopularEvents/>
            </Suspense>
        </div>
    );
}

export default Home;
