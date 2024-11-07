import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectedItemSection.css'

const SelectedItemSection = ({ items }) => {

  const { selectEvent } = useContext(StoreContext)

  const totalAmount = items.length * 100;
  let couponDiscount = 0;
  let currentCoupon = null;
  if (items.length === 4) {
    couponDiscount = 150;
    currentCoupon = "EMBER"
  }
  else if (items.length === 3) {
    couponDiscount = 50;
    currentCoupon = "DRAGON PASS"
  }
  else if (items.length === 2) {
    couponDiscount = 20
    currentCoupon = "BASE PLAN"
  }
  else {
    couponDiscount = 0;
    currentCoupon = "BASE PLAN"
  }

  const grandTotal = totalAmount - couponDiscount;



  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate('/events');
  };

  return (
    <div className="items-section">
      <div className="item-section-head"><h1>Selected Events</h1></div>

      <div className="item-rows">
        {items.map((item) => (
          <div className="item-row" key={item._id}>
            <div className="items">
              <span className="name">{item.name}</span>
              <span className="price">₹ 100</span>
            </div>
            <div className="cancel">
              <i className="fa-solid fa-xmark" onClick={() => selectEvent(item._id)} style={{ color: '#a30000' }}></i>
            </div>
          </div>
        ))
        }
      </div>



      <div className="addMore" onClick={handleAddMore}>
        + Add more
      </div>
      
      <div className="current-ticket-section">
      <h2>YOUR TICKET IS {currentCoupon}</h2>
            <div className="current-ticket">
              <p></p>
            </div>
      </div>
      {
        items.length > 1 ?
          <div className="coupon-current"><p>You are eligible for {currentCoupon}</p></div> :
          <></>
      }
      <div className="total">
        <div className='price'>Total: <p>₹ {totalAmount}</p></div>
        {<div className='price'>{currentCoupon} Coupon discount :  <p>{couponDiscount}</p></div>}
        <div className="grand-total price">Grand Total: <p>₹{grandTotal}</p></div>
      </div>
    </div>
  )
}

export default SelectedItemSection;