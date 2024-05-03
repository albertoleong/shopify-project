import './Tracking.scss';
import React, { useState } from 'react';


const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResponse, setTrackingResponse] = useState('');

  const handleButtonClick = () => {
    if (trackingNumber.trim() !== '') {
      setTrackingResponse("Delivered April 20, 02:54PM Ebony, VA");
    } else {
      setTrackingResponse('');
    }
  };

  return (
      <div className="usps-tracking">
        <h2 className="usps-tracking__title">Tracking Information</h2>
        <input
          className="usps-tracking__input"
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
         {trackingResponse && (
          <p className="usps-tracking__response">{trackingResponse}</p>
        )}
        <button className="usps-tracking__button" onClick={handleButtonClick}>Track Your Order</button>
       
      </div>
  );
};

export default Tracking;