import './RegisterButton.css'
import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Contexts/StoreContext';

const RegisterButton = ()=>{
    const navigate = useNavigate();
    const {selectedEvent} = useContext(StoreContext)
    const selectionLength = selectedEvent.length;

    const handleCheckoutClick = () => {
        navigate("/checkout"); 
    };
    return(
        <>
        <div className="register-button" onClick={handleCheckoutClick}>
            <p>Checkout</p>
             <p>{selectionLength}</p>
        </div>
        </>
    )
}

export default RegisterButton;