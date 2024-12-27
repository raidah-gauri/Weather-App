import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './App.css';  // Make sure to import the CSS file

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div> <h1 className='text-center'>Check Today's Weather</h1>
    <div className="weather-container" >
       
      <div className="weather-card">
        <div className="search-section">
          <SearchBox updateInfo={updateInfo} />
        </div>
        <div className="info-section">
          {weatherInfo ? (
            <InfoBox info={weatherInfo} />
          ) : (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '130%',
              color: '#888'
            }}>
              Search for a city to see weather details
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default WeatherApp;

