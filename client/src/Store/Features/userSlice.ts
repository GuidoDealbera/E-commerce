import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../Interfaces/Users.interfaces";

export interface UserState {
    allUsers: User[];
    user: User | undefined;
};

const initialState: UserState = {
    allUsers: [],
    user: undefined,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addUser: (state, action) => {
            state.allUsers.push(action.payload);
        },
    }
});

export const {setAllUsers, setUser, addUser} = userSlice.actions;

export default userSlice.reducer;

