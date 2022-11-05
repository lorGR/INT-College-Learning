import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

export interface WeatherState {
    data: any,
    status: 'loading' | 'idle' | 'failed'
}

const initialState : WeatherState = {
    data: "",
    status: 'idle'
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
});


export const weatherSelector = (state: RootState) => state.weather.data;
export const weatherStatusSelector = (state: RootState) => state.weather.status;

export default weatherSlice.reducer;