import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };
const authenticationSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

//exporting the actions (autometically detectable as functions)
export const authActions = authenticationSlice.actions;

export default authenticationSlice;