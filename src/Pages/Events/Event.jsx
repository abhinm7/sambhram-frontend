import './Event.css'
import EventTypes from '../../Components/EventTypes/EventTypes'
import EventNav from '../../Components/EventNav/EventNav'
import EventCard from '../../Components/EventCard/EventCard'

const Event = () => {
    return (
        <>
            <div className='event'>
                    <EventNav/>
                    <div className="event-card-container">
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                    </div>
            </div>
        </>
    )
}

export default Event