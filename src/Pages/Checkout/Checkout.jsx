import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; 
import Coupon from '../../Components/Coupons/Coupon'; 
import Merchent from '../../Components/CheckoutMerchent/Merchent';

const CheckoutPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Solo Dance", price: 200 },
    { id: 2, name: "Ludo King", price: 100 },
    { id: 3, name: "Robo Soccer", price: 400 },
  ]);

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const totalAmount = items.reduce((acc, item) => acc + item.price, 0);
  const couponDiscount = selectedCoupon ? (totalAmount * selectedCoupon.percent) / 100 : 0;
  const grandTotal = totalAmount - couponDiscount;

  const handleCouponSelect = (coupon) => {
    setSelectedCoupon(coupon);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
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
    <div className="checkout-container">
      <div className="back">
        <button onClick={handleBack}><img src="https://img.icons8.com/?size=100&id=85459&format=png&color=ffffff" alt="backbut" />Back</button>
      </div>
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

      {step === 1 && (
        <>
          <div className="items-section">
            {items.map((item) => (
              <div className="item-row" key={item.id}>
                <div className="items">
                  <span className="name">{item.name}</span>
                  <span className="price">₹ {item.price}</span>
                </div>
                <div className="cancel">
                  <button onClick={() => handleRemoveItem(item.id)}>×</button>
                </div>
              </div>
            ))}
            <div className="addMore" onClick={handleAddMore}>
              + Add more
            </div>
            <div className="total">
              <div className='price'>Total: <p>₹ {totalAmount}</p></div>
              {selectedCoupon && <div className='price'>Coupon:  <p>-₹ {couponDiscount.toFixed(2)}</p></div>}
              <div className="grand-total price">Grand Total: <p>₹ {grandTotal.toFixed(2)}</p></div>
            </div>
          </div>

          <div className="coupon-section">
            <Coupon onSelectCoupon={handleCouponSelect} />
          </div>

          <div className="merchent-section">
            <h4>People also bought:</h4>
            <div className="merchent-bo">
              <Merchent />
              <Merchent />
              <Merchent />
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="registration-form">
          <h2>Enter Your Details:-</h2>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter College Name" />
          <input type="text" placeholder="Enter Your Mobile Number" />
          <p><img src="https://img.icons8.com/?size=100&id=60673&format=png&color=ff0000" alt="Important" />An OTP will be sent to your registered phone number for verification.</p>
        </div>
      )}

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

      <footer>
        <div className="terms">
          By clicking on continue, you agree <br /> to our <a href="#">terms and conditions</a>.
        </div>
        <div className="continue-section">
          <button className="continue-button" onClick={handleContinue}>Continue ₹ {grandTotal.toFixed(2)}</button>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
