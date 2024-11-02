import React,{createContext,useState} from 'react'

export const StoreContext = createContext();
export const ContextProvider = ({children})=>{ 

    const [eventType, setEventType] =useState("Cultural");
    const [popUpStatus,setPopUpStatus] = useState('');
    const [selectedEvent,setSelectedEvent] = useState([]) 

    const selectEvent = (id)=>{
        if (!selectedEvent.includes(id)){
            setSelectedEvent((prev)=>[...prev,id]);
        }
        else{
            setSelectedEvent((prev)=>prev.filter(eventId=>eventId!=id))
        }
          
    }




    let objects={
        eventType,
        setEventType,
        popUpStatus,
        setPopUpStatus,
        selectedEvent,
        setSelectedEvent,
        selectEvent,
    }
    return(
        <StoreContext.Provider value={objects}>
            {children}
        </StoreContext.Provider>
    )
}