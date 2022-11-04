import { useAppSelector } from "../../app/hooks";
import { weatherSelector } from "../WeatherAPI/WeatherSlice";

const DisplayWeather = () => {

  // const weather = useAppSelector(weatherSelector);
  // const weatherLocation = (weather.data.locations)
  // const [ data ] = [weatherLocation];
  // console.log(data);
  
  return (
    <div>
      DisplayWeather
    </div>
  )
}

export default DisplayWeather