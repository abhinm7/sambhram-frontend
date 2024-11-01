import './EventCard.css';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';


const EventCard = () => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent, eventDatas } = useContext(StoreContext);

    return (
        <>
            {eventDatas
                .filter(event => event.category === eventType)
                .map((event, index) => (
                    <div key={index} className="event-card">
                        <p>{event.name}</p>
                        <div className='card-buttons'>
                            <i onClick={() => setPopUpStatus(event)} className="fa-solid fa-circle-info" style={{ color: '#610000' }}></i>
                            <i
                                onClick={() => selectEvent(event._id)}
                                className={selectedEvent.includes(event._id) ? "fa-solid fa-plus" : "fa-solid fa-xmark"}
                                style={{ color: '#610000' }}
                            ></i>


                        </div>
                    </div>
                ))}
        </>
    );
}

export default EventCard;
