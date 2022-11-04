import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getWeather } from './features/weather/weatherAPI';
import { weatherSelector, weattherStatusSelector } from './features/weather/weatherSlice';

function App() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(weatherSelector);
  console.log(weather);
  const handleSubmit = (e : React.FormEvent<HTMLFormElement> | any) => {
    try {
      e.preventDefault();
      const userLocation = e.target.elements[0].value;
      dispatch(getWeather({userLocation}));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter City or Country' />
        {weather > 0 && <p>{weather}°C</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
