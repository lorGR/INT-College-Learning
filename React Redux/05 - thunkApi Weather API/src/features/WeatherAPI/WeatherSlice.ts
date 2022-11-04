import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { getWeather } from "./WeatherApi"

export interface Weather {
    wdir: number,
    temp: number,
    sunrise: string ,
    visibility: number,
    wspd: number,
    icon: string,
    stations: string,
    heatindex: any,
    cloudcover: any,
    datetime: string,
    precip: any,
    moonphase: number,
    snowdepth: any,
    sealevelpressure: number,
    dew: number,
    sunset: string,
    humidity: number,
    wgust: any,
    windchill: any
}

export enum Status {
    IDLE = "idle",
    LOADING = "loading",
    FAILED = "failed"
}

export interface WeatherState {
    data: any,
    status: Status
}

const initialState: WeatherState = {
    data: {
        wdir: 0,
        temp: 0,
        sunrise: "" ,
        visibility: 0,
        wspd: 0,
        icon: "",
        stations: "",
        heatindex: null,
        cloudcover: null,
        datetime: "",
        precip: null,
        moonphase: 0,
        snowdepth: null,
        sealevelpressure: 0,
        dew: 0,
        sunset: "",
        humidity: 0,
        wgust: null,
        windchill: null
    },
    status: Status.IDLE
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = Status.IDLE;
                state.data = action.payload.data;
            })
            .addCase(getWeather.rejected, (state) => {
                state.status = Status.FAILED;
            })
    }
});

export const weatherSelector = (state: RootState) => state.weather

export default weatherSlice.reducer;