import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';

import PopularEvents from '../../Components/PopularEvents/PopularEvents';
import EventTypes from '../../Components/EventTypes/EventTypes';
import Spotlight from '../../Components/Spotlights/Spotlights';

const Home = () => {
    return (
        <div className="home">
            <Header/>
                <Spotlight/>
        </div>
    );
}

export default Home;
