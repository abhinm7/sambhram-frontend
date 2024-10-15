import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import PopularEvents from '../../Components/PopularEvents/PopularEvents'
import EventTypes from '../../Components/EventTypes/EventTypes'

const Home = () => {
    return (
        <>
            <div className="home">
                <Header/>
                <EventTypes/>
                <PopularEvents/>
               


                <div className="sponsers">

                </div>
            </div>

        </>
    )

}

export default Home