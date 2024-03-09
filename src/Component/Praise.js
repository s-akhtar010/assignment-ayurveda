import React, { useState } from 'react';
//import './App.css';

export default function Praise() {
  const [advertisementColor, setAdvertisementColor] = useState('');
  const [approvalColor, setApprovalColor] = useState('');
  const [goodProductColor, setGoodProductColor] = useState('');

  const handleAdvertisementClick = () => {
    setAdvertisementColor('green');
    setApprovalColor('');
    setGoodProductColor('');
  };

  const handleApprovalClick = () => {
    setApprovalColor('green');
    setAdvertisementColor('');
    setGoodProductColor('');
  };

  const handleGoodProductClick = () => {
    setGoodProductColor('green');
    setAdvertisementColor('');
    setApprovalColor('');
  };

  return (
    <div className="app2">
      <div className="praise-section">
        <h2>Praise</h2>
        <button
          className="button advertisement-button"
          style={{ backgroundColor: advertisementColor, border: 0,  }}
          onClick={handleAdvertisementClick}
        >
          Advertisement
        </button>
        <button
          className="button approval-button"
          style={{ backgroundColor: approvalColor, border: 0 ,marginLeft:6}}
          onClick={handleApprovalClick}
        >
          Approval
        </button>

        <button
          className="button good-product-button"
          style={{ backgroundColor: goodProductColor, border: 0,marginLeft:6}}
          onClick={handleGoodProductClick}
        >
          Good Product
        </button>
      </div>
    </div>
  );
}
