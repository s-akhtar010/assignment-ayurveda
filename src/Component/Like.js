import React, { useState } from 'react';
//import './App.css';

export default function Like() {
  const [likeColor, setLikeColor] = useState('');
  const [dislikeColor, setDislikeColor] = useState('');

  const handleLikeClick = () => {
    setLikeColor('green');
    setDislikeColor(''); 
  };

  const handleDislikeClick = () => {
    setDislikeColor('green');
    setLikeColor(''); 
  };

  return (
    <div className="app1">
      <div className="like-dislike-buttons">
        <h2 class="Trausti">Would you Recommended Trausti</h2>
        <div class="like-dislike-button">
        <button
          className="button like-button"
          style={{ backgroundColor: likeColor ,border:0}}
          onClick={handleLikeClick}
        >
           &#128078; No
        </button>
        <button
          className="button dislike-button"
          style={{ backgroundColor: dislikeColor,border:0, marginLeft:6}}
          onClick={handleDislikeClick}
        >
          &#x1F44D; Yes
        </button>
        </div>

      </div>
    </div>
  );
}
