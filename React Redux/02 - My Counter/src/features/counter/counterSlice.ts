import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

export interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increament, decrement } = counterSlice.actions;

export const selectCounter = (state: RootState) => state.counter.value;

export default counterSlice.reducer;