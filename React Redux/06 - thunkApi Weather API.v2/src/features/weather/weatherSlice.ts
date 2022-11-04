import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { getWeather } from "./weatherAPI";

export interface WeatherState { 
    value: number,
    status: 'idle' | 'loading' | 'failed'
}

const initialState : WeatherState = {
    value: 0,
    status: 'idle'
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = "idle";
                state.value = action.payload;
            })
            .addCase(getWeather.rejected, (state) => {
                state.status = "failed";
            })
    }
});

export const weatherSelector = (state: RootState) => state.weather.value;
export const weattherStatusSelector = (state: RootState) => state.weather.status;

export default weatherSlice.reducer;