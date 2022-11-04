import './App.css';
import { useAppSelector } from './app/hooks';
import DisplayWeather from './features/DisplayWeather/DisplayWeather';
import WeatherAPI from './features/WeatherAPI/WeatherForm';
import { weatherSelector } from './features/WeatherAPI/WeatherSlice';


function App() {

  return (
    <div className="App">
      <WeatherAPI />
      <DisplayWeather />
    </div>
  );
}

export default App;
