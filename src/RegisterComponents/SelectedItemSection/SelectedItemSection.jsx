import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext } from 'react';
// import './SelectedItemSection.css'
// import { eventsData } from '../../sampleDB';

const SelectedItemSection = ({items}) =>{
 
    const totalAmount = items.reduce((acc, item) => acc + item.price, 0);
    // const couponDiscount = selectedCoupon ? (totalAmount * selectedCoupon.percent) / 100 : 0;
    const couponDiscount = 10;
    const grandTotal = totalAmount - couponDiscount;
    const {selectEvent} = useContext(StoreContext)
 
    const handleAddMore = () => {
        navigate('/events');
      };
      
    return(
        <div className="items-section">
              {items.map((item) => (
                <div className="item-row" key={item._id}>
                  <div className="items">
                    <span className="name">{item.name}</span>
                    <span className="price">₹ {item.price}</span>
                  </div>
                  <div className="cancel">
                    <i className="fa-solid fa-xmark" onClick={() => selectEvent(item._id)} style={{ color: '#a30000' }}></i>
                  </div>
                </div>
              ))
              }


              <div className="addMore" onClick={handleAddMore}>
                + Add more
              </div>
              
              <div className="total">
                <div className='price'>Total: <p>₹ {totalAmount}</p></div>
                { <div className='price'>Coupon:  <p>-₹ {couponDiscount.toFixed(2)}</p></div>}
                <div className="grand-total price">Grand Total: <p>₹ {grandTotal.toFixed(2)}</p></div>
              </div>
            </div>
    )
}

export default SelectedItemSection;