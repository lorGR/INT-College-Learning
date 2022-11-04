import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { getJoke } from "./textAPI"

export interface TextState {
    text: string,
    status: "idle" | "loading" | "failed"
}

const initialState: TextState = {
    text: "Click on the button go be little more happy with your life",
    status: "idle"
}

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        changeText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getJoke.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getJoke.fulfilled, (state, action) => {
                state.status = "idle";
                state.text = action.payload;
            })
            .addCase(getJoke.rejected, (state) => {
                state.status = "failed";
            })
    }
});

export const { changeText } = textSlice.actions;

export const textSelctor = (state: RootState) => state.text;

export default textSlice.reducer;