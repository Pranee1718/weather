import React from 'react';
import './ClothingSuggestion.css';

const ClothingSuggestion = ({ weatherData }) => {
  const temperature=weatherData?.day?.avgtemp_c;
  let suggestion = '';

 
  if (temperature > 25) {
    suggestion = 'It\'s warm outside, wear light clothing like t-shirts and shorts.';
  } else if (temperature > 15) {
    suggestion = 'It\'s a bit cool, consider wearing a light jacket or sweater.';
  } else {
    suggestion = 'It\'s cold, make sure to bundle up with warm clothing.';
  }

  return (
    <div className="clothing-suggestion">
      <h2>Clothing Suggestion</h2>
      <p>{suggestion}</p>
    </div>
  );
};

export default ClothingSuggestion;
