import './RegistrationForm.css'
import { StoreContext } from '../../Contexts/StoreContext';
import { useContext } from 'react';

const RegistrationForm = () => {
    const { data, setData, sendDatatoBackend } = useContext(StoreContext)
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className="registration-form">

            <form action="" className='registration-form'>
                <h2>Enter Your Details</h2>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter USN"
                    name="usn"
                    onChange={onChangeHandler}
                    value={data.usn}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter College Name"
                    name="college"
                    onChange={onChangeHandler}
                    value={data.college}
                    required
                />
                <input
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="mobile"
                    onChange={onChangeHandler}
                    value={data.mobile}
                    required
                />
                
                {/* <div><i className="fa-solid fa-circle-info fa-lg" style={{ color: "#ff0000" }}></i>
                <p>OTP will be sent to your registered phone number for verification.</p></div> */}
            </form>
            {/* <button className="continue-button" onClick={sendDatatoBackend}>send data</button> */}

        </div>
    )


}

export default RegistrationForm;