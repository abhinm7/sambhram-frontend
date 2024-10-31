import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { StoreContext } from '../../Contexts/StoreContext';
import SelectedItemSection from '../../RegisterComponents/SelectedItemSection/SelectedItemSection';

const CheckoutPage = () => {


  const { selectedEvent, setSelectedEvent, eventDatas, data, setData, setAmount, amount, sendDatatoBackend, payNow, step, setStep } = useContext(StoreContext);

  const items = eventDatas.filter(event => selectedEvent.includes(event._id));
  const [selectedCoupon, setSelectedCoupon] = useState(null);


  const navigate = useNavigate();

  const totalAmount = items.reduce((acc, item) => acc + item.price, 0);
  const couponDiscount = selectedCoupon ? (totalAmount * selectedCoupon.percent) / 100 : 0;
  const grandTotal = totalAmount - couponDiscount;

  useEffect(() => {
    setAmount(() => grandTotal)
    console.log(amount)
  }, [grandTotal])

  const handleCouponSelect = (coupon) => {
    setSelectedCoupon(coupon);
  };

  if (selectedEvent.length == 0) {
    navigate('/events');
  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
    else {
      navigate('/events');
    }
  };

  const handleAddMore = () => {
    navigate('/events');
  };

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const getOtpValue = () => otp.join("");

  return (
    <div className="checkout-flex">
      <div className="back" onClick={handleBack}>
        <i className="fa-solid fa-circle-chevron-left fa-2xl" style={{ color: "#d53810" }}></i>
      </div>
      <div className="checkout-container">

        <div className="steps">
          <div className="step">
            <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step-title ${step >= 1 ? 'active' : ''}`}>Checkout</div>
          </div>
          <div className="step">
            <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step-title ${step >= 2 ? 'active' : ''}`}>Register</div>
          </div>
          <div className="step">
            <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
            <div className={`step-title ${step >= 3 ? 'active' : ''}`}>Verification</div>
          </div>
        </div>

        {step === 1 &&
          <SelectedItemSection items={items} />
        }




        {/* from this form */}




        {step === 2 &&
          <div className="registration-form">
            <form action="" className='registration-form'>
              <h2>Enter Your Details</h2>

              <input type="text" placeholder="Enter Your Name" name='name' onChange={onChangeHandler} value={data.name} />
              <input type="text" placeholder="Enter USN" name='usn' onChange={onChangeHandler} value={data.usn} />
              <input type="text" placeholder="Enter College Name" name='college' onChange={onChangeHandler} value={data.college} />
              <input type="text" placeholder="Enter Your Mobile Number" name='mobile' onChange={onChangeHandler} value={data.mobile} />

              <div><i className="fa-solid fa-circle-info fa-lg" style={{ color: "#ff0000" }}></i>
                <p>OTP will be sent to your registered phone number for verification.</p></div>
            </form>
            <button className="continue-button" onClick={sendDatatoBackend}>send data</button>

          </div>
        }







        {step === 3 && (
          <div className="otp-section">
            <h2>Enter the OTP</h2>
            <div className="otp-input">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
            <p>Enter the OTP sent to your mobile number. <br /><br /><br />The OTP is valid for 60 seconds.</p>
            <p className='p2'>Didn't receive the OTP? <button>Resend OTP</button></p>
          </div>
        )}


      </div>
      <div className="continue-panel">
        <div className="terms">
          <i onClick={() => setSelectedEvent(() => [])} className="fa-solid fa-trash" style={{ color: "#520f0f" }}></i>
        </div>

        <button className="continue-button" onClick={payNow}>kulal button</button>
        <div className="continue-section">
          <button className="continue-button" onClick={handleContinue}>Continue ₹ {grandTotal.toFixed(2)}</button>
        </div>
      </div>

    </div>


  );
};

export default CheckoutPage;
