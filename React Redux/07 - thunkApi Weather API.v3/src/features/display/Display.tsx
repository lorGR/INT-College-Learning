import { useAppSelector } from "../../app/hooks"
import { weatherSelector } from "../waether/weatherSlice"
import { Weather } from "../waether/weatherSlice";

const Display = () => {

    const weather: Weather = useAppSelector(weatherSelector);
    console.log(weather);

    return (
        <div className="weather-display">
            {weather.datetime &&
                <>
                    <div className="weather-display__current-temp">
                        <p className="weather-display__current-temp__p">{weather.temp}</p><sup>°</sup>
                    </div>
                    <div className="weather-display__more-details">
                        <div className="weather-display__more-details__humidity">
                            <p>humidity</p>
                            <p>{weather.humidity}</p>
                        </div>
                        <div className="weather-display__more-details__wind-speed">
                            <p>wind speed</p>
                            <p>{weather.wspd}</p>
                        </div>
                        <div className="weather-display__more-details__couldiness">
                            <p>cloudiness</p>
                            <p>{weather.cloudcover}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Display