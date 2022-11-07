import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { getWeather } from "./weatherAPI";

export interface Weather {
    "wdir": number,
    "temp": number,
    "sunrise": string,
    "visibility": number,
    "wspd": number,
    "icon": string,
    "stations": string,
    "heatindex": any,
    "cloudcover": number,
    "datetime": string,
    "precip": any,
    "moonphase": number,
    "snowdepth": any,
    "sealevelpressure": number,
    "dew": number,
    "sunset": string,
    "humidity": number,
    "wgust": any,
    "windchill": any
}

export interface WeatherState {
    data: any,
    status: 'loading' | 'idle' | 'failed'
}

const initialState: WeatherState = {
    data: "",
    status: 'idle'
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            })
            .addCase(getWeather.rejected, (state) => {
                state.status = "failed";
            })
    }
});

export const weatherSelector = (state: RootState) => state.weather.data;
export const weatherStatusSelector = (state: RootState) => state.weather.status;

export default weatherSlice.reducer;
