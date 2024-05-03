import './Tracking.scss';
import React, { useState } from 'react';
import axios from 'axios';

const USERID = '55Q9FASHI2225';
const PASSWORD = 'B6780UN22IH5664';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTrackingInfo = async () => {
    setLoading(true);
    try {
      const apiUrl = `https://secure.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<TrackFieldRequest USERID="${USERID}"><TrackID ID="${encodeURIComponent(trackingNumber)}"></TrackID></TrackFieldRequest>&USERID=${USERID}&PASSWORD=${PASSWORD}`;
      const response = await axios.get(apiUrl);
      setTrackingData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Invalid tracking info:', error);
      setError('Please provide a valid tracking info and try again.');
      setLoading(false);
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
      {error && <p className="usps-tracking__error">{error}</p>}
      {loading && <p>Loading...</p>}
      {trackingData && (
        <pre>{JSON.stringify(trackingData, null, 2)}</pre>
      )}
      <button className="usps-tracking__button" onClick={fetchTrackingInfo}>Track Your Order {'>'}</button>
    </div>
  );
};

export default Tracking;