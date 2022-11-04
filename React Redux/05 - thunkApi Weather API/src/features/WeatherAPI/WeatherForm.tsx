import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getWeather } from "./WeatherApi";
import { weatherSelector } from "./WeatherSlice";

const WeatherAPI = () => {
    const dispatch = useAppDispatch();
    const weather = useAppSelector(weatherSelector);
    const weatherLocation = weather.data.locations
    console.log(weatherLocation);
    const handleSubmit = (event: any) => {
        try {
            event.preventDefault();
            const userLocation = event.target[0].value;
            dispatch(getWeather({ userLocation }));
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" placeholder="Name City / Country" />
                <button>Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherAPI