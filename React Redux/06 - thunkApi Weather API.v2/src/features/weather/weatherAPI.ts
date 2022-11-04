import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
    "weather/get-weather",
    async({userLocation} : {userLocation : string},thunkApi) => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: userLocation,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: '0'
            },
            headers: {
                'X-RapidAPI-Key': '794bd86d0amsh26907500f2be767p16d00ejsn2faaf809127b',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }
        const response = await axios.request(options);
        const { data } = response;
        const locationInfo = (data.locations[`${userLocation}`]);
        const currentConditions = locationInfo.currentConditions.temp;
        console.log(currentConditions);
        return currentConditions;
    }
)