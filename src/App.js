import React, { useState } from 'react';
import './App.css';
import Like from './Component/Like';
import Praise from './Component/Praise';

export default function App() {
  const [selectedStarCounted, setSelectedStarCounted] = useState(0);
  const [selectedStarCountedd, setSelectedStarCountedd] = useState(0);
  const [like, setLike] = useState(0);

  return (
    
    <div className="app">
     
      <div className="safety">
        <h2 className="safe">Safety</h2>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${index + 1 <= selectedStarCounted ? 'selected' : ''}`}
              onClick={() => {
                setSelectedStarCounted(index + 1);
              }}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>

      <div className="communication">
        <h2 className="heading">Communication</h2>
        <div className="stars comm-head">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${index + 1 <= selectedStarCountedd ? 'selected' : ''}`}
              onClick={() => {
                setSelectedStarCountedd(index + 1);
              }}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>

      <Like/>
      <Praise/>
    </div>
  );
}
