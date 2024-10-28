import './EventNav.css'
import React,{useContext} from 'react'
import { StoreContext } from '../../Contexts/StoreContext';
 
const EventNav = ()=>{
    const {setEventType} = useContext(StoreContext);
    return(
        
        <>
        <div className="event-nav-container">
        <div className="event-nav">
            <div className="event-nav-type" onClick={()=>setEventType("Technical")}>
                <p>Technical</p>
            </div>
            <div className="event-nav-type" onClick={()=>setEventType("Cultural")}>
                <p>Cultural</p>
            </div>
            <div className="event-nav-type" onClick={()=>setEventType("Special")}>
                <p>Special</p>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default EventNav;