import './EventNav.css'
import React,{useContext} from 'react'
import { StoreContext } from '../../Contexts/StoreContext';
 
const EventNav = ()=>{
    const {setEventType,eventType} = useContext(StoreContext);
    return(
        
        <>
        <div className="event-nav-container">
        <div className="event-nav">
            <div className={`event-nav-type ${eventType=="Technical"?'active':''}`} onClick={()=>setEventType("Technical")}>
                <p>TECHNICAL</p>
            </div>
            <div className={`event-nav-type ${eventType=="Cultural"?'active':''}`}  onClick={()=>setEventType("Cultural")}>
                <p>CULTURAL</p>
            </div>
            <div className={`event-nav-type ${eventType=="Special"?'active':''}`} onClick={()=>setEventType("Special")}>
                <p>SPECIAL</p>
            </div>
        </div>
        <img className='lanthern' src="https://static.vecteezy.com/system/resources/previews/014/475/701/non_2x/golden-lantern-pattern-chinese-lantern-silhouette-for-decoration-for-chinese-new-year-png.png" alt="" />
        <img className='lanthern2' src="https://static.vecteezy.com/system/resources/previews/014/475/701/non_2x/golden-lantern-pattern-chinese-lantern-silhouette-for-decoration-for-chinese-new-year-png.png" alt="" />
        </div>
        
        </>
    )
}

export default EventNav;