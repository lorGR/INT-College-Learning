import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJoke = createAsyncThunk('api/jokes/get-joke', async (_, thunkApi) => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    return data.value;
})