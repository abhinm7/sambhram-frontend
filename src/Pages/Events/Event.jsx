import './Event.css';
import React, { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';
import EventNav from '../../Components/EventNav/EventNav';
import EventCard from '../../Components/EventCard/EventCard';
import EventPopup from '../../Components/EventPopup/EventPopup';
import RegisterButton from '../../Components/RegisterButton/RegisterButton';

const Event = () => {
    const { eventType, popUpStatus, selectedEvent } = useContext(StoreContext);

    // Directly evaluate conditions without memoization
    const isPopupVisible = popUpStatus !== '';
    const isRegisterButtonVisible = selectedEvent.length > 0;

    return (
        <div className='event'>
            <EventNav />
            <div className='event-container'>
                <h1 className='event-type-heading'>{eventType}</h1>
                <div className="event-card-container">
                    <EventCard />
                    {isPopupVisible && <EventPopup />}
                    {isRegisterButtonVisible && <RegisterButton />}
                </div>
            </div>
        </div>
    );
};

export default Event;
