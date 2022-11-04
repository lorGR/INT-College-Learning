import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

export interface PostState {
    text: string,
    imgSrc: string
}

const initialState: PostState = {
    text: "",
    imgSrc: ""
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        changePost: (state,action: PayloadAction<PostState>) => {
            state.text = action.payload.text;
            state.imgSrc = action.payload.imgSrc;
        }
    }
});

export const { changePost } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;