import './EventCard.css'
import { eventsData } from '../../sampleDB';
import { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

const EventCard = () => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent } = useContext(StoreContext);
    let CurrentEvent;
    if (eventType == "Technical") {
        CurrentEvent = eventsData.filter(event => event.event_type == "Technical")
    }
    else if (eventType == "Cultural") {
        CurrentEvent = eventsData.filter(event => event.event_type == "Cultural")
    }
    else {
        CurrentEvent = eventsData.filter(event => event.event_type == "Special")
    }
    return (
        <>
            {CurrentEvent.map((event, index) => (
                <div key={index} className="event-card">
                    <p>{event.name}</p>
                    <div className='card-buttons'>
                        <button onClick={() => setPopUpStatus(event)}>Info</button>

                        <button onClick={() => selectEvent(event._id)}>{selectedEvent.includes(event._id) ? "Remove" : "Add"}</button>


                    </div>
                </div>
            ))}
        </>
    )
}

export default EventCard;