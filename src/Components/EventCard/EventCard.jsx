import './EventCard.css';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

 
const EventCard = () => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent, eventDatas} = useContext(StoreContext);

    return (
        <>
            {eventDatas
                .filter(event => event.category === eventType)
                .map((event, index) => (
                    <div key={index} className="event-card">
                        <p>{event.name}</p>
                        <div className='card-buttons'>
                            <button onClick={() => setPopUpStatus(event)}>Info</button>
                            <button onClick={() => selectEvent(event._id)}>
                                {selectedEvent.includes(event._id) ? "Remove" : "Add"}
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default EventCard;
