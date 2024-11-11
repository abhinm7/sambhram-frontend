import './EventCard.css';
import { useContext, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

const EventCard = () => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent, eventDatas } = useContext(StoreContext);
    const [flippedCard, setFlippedCard] = useState(null);

    const toggleFlip = (id) => setFlippedCard(prevId => (prevId === id ? null : id));

    return (
        <>
            {eventDatas
                .filter(event => event.eventType === eventType)
                .map(event => (
                    <div key={event._id} className="card-container">
                        <div 
                            className={`event-card ${flippedCard === event._id ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(event._id)}
                        >
                            <div className="front">
                                <p>{event.eventName}</p>
                            </div>
                            <div className="back">
                                <div className="back-div">
                                    <div className="card-button2-back">
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                selectEvent(event._id);
                                            }} 
                                            className={selectedEvent.includes(event._id) ? "nice-button active-nice" : "nice-button"}
                                        >
                                            {!selectedEvent.includes(event._id) ? "#ADD EVENT" : "#EVENT ADDED"}
                                        </button>
                                    </div>
                                    <div className="card-button-back">
                                        <i
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPopUpStatus(event);
                                            }}
                                            className="fa-solid fa-circle-info"
                                            style={{ color: '#610000' }}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default EventCard;
