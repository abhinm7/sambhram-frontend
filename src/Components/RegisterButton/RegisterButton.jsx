import './RegisterButton.css'
import React,{useContext} from 'react'
import { StoreContext } from '../../Contexts/StoreContext';

const RegisterButton = ()=>{
    const {selectedEvent} = useContext(StoreContext)
    const selectionLength = selectedEvent.length;
    return(
        <>
        <div className="register-button">
            <p>register</p>
             <p>{selectionLength}</p>
        </div>
        </>
    )
}

export default RegisterButton;