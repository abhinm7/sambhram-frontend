import React, { createContext, useState, useEffect, } from 'react';
import { eventsData } from '../sampleDB';
import axios from 'axios';

const url =  process.env.REACT_APP_URL;
export const StoreContext = createContext();
export const ContextProvider = ({ children }) => {
    const [eventType, setEventType] = useState("Cultural");
    const [popUpStatus, setPopUpStatus] = useState('');

    const [eventDatas, setEventDatas] = useState(() => {
        const allEvents = localStorage.getItem("eventDatas");
        return allEvents ? JSON.parse(allEvents) : [];
    });
     
    const [amount, setAmount] = useState();
    const [data, setData] = useState({
        name: "",
        usn: "",
        college: "",
        mobile: "",
    });
    const [selectedEvent, setSelectedEvent] = useState(() => {
        const savedEvents = localStorage.getItem("selectedEvent");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    const [step, setStep] = useState(1);
    const selectEvent = (id) => {
        if (!selectedEvent.includes(id)) {
            setSelectedEvent((prev) => [...prev, id]);
        } else {
            setSelectedEvent((prev) => prev.filter(eventId => eventId !== id));
        }
    };

    useEffect(() => {
        localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
    }, [selectedEvent]);

    useEffect(()=>{
        localStorage.setItem("eventDatas",JSON.stringify(eventDatas));
    },[eventDatas])

    const sendDatatoBackend = async () => {
        const dataSet = {
            name: data.name,
            usn: data.usn,
            college: data.college,
            mobile: data.mobile,
            amount: amount,
            registrations: selectedEvent.map(id => ({ event_id: id }))
        };

        try {
            const res = await axios.post(`${url}/api/v1/auth/payment`, dataSet);
            console.log("success bro ", res.data);
            return res.data; // Return the response data containing the order ID
        } catch (err) {
            console.error("Error in backend call", err);
            throw err; // Rethrow the error so it can be caught by payNow
        }
    };

    const payNow = async () => {
        try {
            // Get order details from backend
            const payLoad = await sendDatatoBackend();

            // Open Razorpay Checkout with dynamic order details
            const options = {
                key: process.env.REACT_APP_RAZORPAY_ID, // Your Razorpay Key ID
                amount: payLoad.amount, // Amount from backend response (should be in subunits, e.g., paise for INR)
                currency: payLoad.currency,
                name: "SHREE DEVI SAMBHRAM",
                description: "International Tech Fest",
                image: "https://storage.googleapis.com/educrib/colleges/uploads/f7a1791dd41f3fa5e5e4f8a6faea2467ShreeDeviCollegeOfPhysiotherapy_Fd.jpg",
                order_id: payLoad.orderId,
                redirect: url+'/api/v1/auth/payment/verify',
                // handler: function (response) {
                //     alert(`Payment ID: ${response.razorpay_payment_id}`);
                //     alert(`Order ID: ${response.razorpay_order_id}`);
                //     alert(`Razorpay Signature: ${response.razorpay_signature}`);
                //     history.push({
                //         pathname:'/verify',
                //         state:{
                //             razorpay_payment_id: response.razorpay_payment_id,
                //             razorpay_order_id:response.razorpay_order_id,
                //             razorpay_signature:response.razorpay_signature,
                //             name:data.name,
                //             usn:data.usn,
                //             phone:data.mobile,
                //             college:data.college,
                //             registrations: selectedEvent.map(id => ({ event_id: id }))
                //         }
                //     })
                // },
                prefill: {
                    name: data.name,
                    contact: data.mobile
                },
                notes: {
                    address: "Kenjar"
                },
                theme: {
                    color: "#ff001b",
                }
            };

            const rzp = new Razorpay(options);
            rzp.on('payment.failed', function (response) {
                alert("Payment failed: " + response.error.description);
            });
            rzp.open();
        } catch (error) {
            console.error("Error initiating payment", error);
        }
    };
    
    useEffect(() => {
        console.log(url);
        
        // Fetch data with axios and update state with the results
        axios.get(`${url}/api/v1/auth/events`)
            .then((response) => {
                
                setEventDatas(response.data);
                console.log("Data successfully fetched from server ||","fetched quantity ::",eventDatas.length);
            })
            .catch((err) => {
                console.log("Error in axios", err);
                setEventDatas(eventsData);
                console.log("Sample db fetched for production mode", eventsData);
            });
    }, []);

 
    const objects = {
        eventType,
        setEventType,
        popUpStatus,
        setPopUpStatus,
        selectedEvent,
        setSelectedEvent,
        selectEvent,
        eventDatas,
        eventsData,
        setData,
        data,
        setAmount,
        amount,
        sendDatatoBackend,
        payNow,
        step,
        setStep
    };

    return (
        <StoreContext.Provider value={objects}>
            {children}
        </StoreContext.Provider>
    );
};
