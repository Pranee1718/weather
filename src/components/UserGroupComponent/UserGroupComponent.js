import React from 'react';

const UserGroupComponent = ({ userGroup, weatherData }) => {
  const precipitation = weatherData?.totalprecip_mm;
  console.log(weatherData)

  const renderContent = () => {
    switch (userGroup) {
      case 'Event Planner':
        return <p>Plan events with clear skies and pleasant temperatures.</p>;
      case 'Farmer':
        return (
          
            <p>Precipitation is {precipitation ? `${precipitation}%` : 'N/A'}{" "}.  Ideal conditions for planting or harvesting.</p>
            
          
        );
      case 'Traveler':
        return <p>Check weather conditions at your destination before traveling.</p>;
      default:
        return null;
    }
  };

  return <div className="user-group-component">{renderContent()}</div>;
};

export default UserGroupComponent;
