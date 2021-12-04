import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

//states related to counter
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,

    // all the reducers which will manipulate counter state
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
})


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
})

//configuring the store with all the reducers
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer,
    }
});

//exporting the actions (autometically detectable as functions)
export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;