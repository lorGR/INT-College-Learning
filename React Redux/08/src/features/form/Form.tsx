import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { getWeather } from '../waether/weatherAPI';

const Form = () => {

    const dispatch = useAppDispatch();
    const handleSubmit = (event : any) => {
        try {
            event.preventDefault();
            const userLocation = event.target.elements[0].value;
            dispatch(getWeather({userLocation}));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="weather-form">
            <input type="text" placeholder="Enter City or Country" />
            <button>Get Weather</button>
        </form>
    )
}

export default Form