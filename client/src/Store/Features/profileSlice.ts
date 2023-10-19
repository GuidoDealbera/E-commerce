import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../Interfaces/Users.interfaces";

export interface ProfileState {
    user: User | undefined;
};

const initialState: ProfileState = {
    user: undefined
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.user = action.payload
        },
        clearProfile: (state) => {
            state.user = undefined;
        }
    }
});

export const {setProfile, clearProfile} = profileSlice.actions;

export default profileSlice.reducer;