import { User } from "../../Interfaces/Users.interfaces";
import { createSlice } from "@reduxjs/toolkit";

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
            const user = state.allUsers.find((user) => user.id === action.payload);
            state.user = user;
        },
        addUser: (state, action) => {
            state.allUsers.push(action.payload);
        },
    }
});

export const {setAllUsers, setUser, addUser} = userSlice.actions;

export default userSlice.reducer;

