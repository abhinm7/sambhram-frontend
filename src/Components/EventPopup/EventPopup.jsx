import './EventPopup.css'
import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext } from 'react';

const EventPopup = () => {
    const { setPopUpStatus, popUpStatus, selectEvent, selectedEvent } = useContext(StoreContext);
    return (
        <>
            <div onClick={() => setPopUpStatus('')} className={`event-popup-container ${popUpStatus ? 'show' : ''}`} >
                <div className="event-popup" onClick={(e) => e.stopPropagation()}>

                    <div className="event-content">


                        <div className='pop-main'>
                            <h3 className="event-name">{popUpStatus.name} </h3>
                            <img src="/dragon-seal.jpg" alt="" />
                            <p className="event-desc">{popUpStatus.description} </p>
                            <p className="event-desc">{popUpStatus.team_size_limit} </p>
                            {selectedEvent.includes(popUpStatus._id) ?
                                <button className='event-selected-button' onClick={() => selectEvent(popUpStatus._id)}>Remove</button> :
                                <button className='event-select-button' onClick={() => selectEvent(popUpStatus._id)}>Select</button>
                            }

                        </div>
                    </div>


                    {/* <button onClick={() => setPopUpStatus('')}>x</button> */}
                </div>
            </div>

        </>
    )
}

export default EventPopup;