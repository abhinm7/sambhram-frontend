import './EventCard.css';
import { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

const EventCard = () => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent, eventDatas } = useContext(StoreContext);
    return (
        <>
        
            {eventDatas
                .filter(event => event.eventType === eventType)
                .map((event) => (
                    <div key={event._id} className="card-container">
                        <div className="event-card">
                            <div className="front">
                                <p>{event.eventName}</p>

                                {/* <div className="card-buttons">
                                    <i
                                        onClick={() => setPopUpStatus(event)}
                                        className="fa-solid fa-circle-info"
                                        style={{ color: '#610000' }}
                                    ></i>
                                    <i
                                        onClick={() => selectEvent(event._id)}
                                        className={selectedEvent.includes(event._id) ? "fa-solid fa-xmark" : "fa-solid fa-plus"}
                                        style={{ color: '#610000' }}
                                    ></i>
                                </div> */}
                            </div>

                            <div className="back">
                                <div className="back-div">
                                    <div className="card-button-back">
                                    <i
                                        onClick={() => setPopUpStatus(event)}
                                        className="fa-solid fa-circle-info"
                                        style={{ color: '#610000' }}
                                    ></i>
                                    <i
                                        onClick={() => selectEvent(event._id)}
                                        className={selectedEvent.includes(event._id) ? "fa-solid fa-xmark" : "fa-solid fa-plus"}
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
}

export default EventCard;
