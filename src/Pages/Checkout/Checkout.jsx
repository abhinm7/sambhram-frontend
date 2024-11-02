import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { StoreContext } from '../../Contexts/StoreContext';
import SelectedItemSection from '../../RegisterComponents/SelectedItemSection/SelectedItemSection';
import RegistrationForm from '../../RegisterComponents/RegistrationForm/RegistrationForm';
import { toast } from 'react-toastify';

const CheckoutPage = () => {


  const { selectedEvent, setSelectedEvent, eventDatas, setAmount, amount, payNow, step, data, setStep } = useContext(StoreContext);

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


  const handleContinue = () => {
    if (step < 2) {
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

  const validateForm = ()=>{
    if (!data.name || !data.usn || !data.college || !data.mobile) {
      toast.error("Please fill out all fields.");
      return;
  }

  if (!/^\d{10}$/.test(data.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
  }
    payNow();
  }


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
          {/* <div className="step">
            <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
            <div className={`step-title ${step >= 3 ? 'active' : ''}`}>Verification</div>
          </div> */}
        </div>

        {step === 1 &&
          <SelectedItemSection items={items} />
        }


        {step === 2 &&
          <RegistrationForm />
        }


        {/* {step === 3 && (
          
        ) */}





      </div>
      <div className="continue-panel">
        <div className="terms">
          <i onClick={() => setSelectedEvent(() => [])} className="fa-solid fa-trash" style={{ color: "#520f0f" }}></i>
        </div>

        <div className="continue-section">
          <button className="continue-button" onClick={() => {
            handleContinue();
            step === 2 ? validateForm() : null;
          }}>Continue ₹ {grandTotal.toFixed(2)}</button>
        </div>
      </div>

    </div>


  );
};

export default CheckoutPage;
