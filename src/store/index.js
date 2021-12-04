import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

//states related to counter
const counterSlice = createSlice({
    name: 'counter',
    initialState,

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


//configuring the store with all the reducers
const store = configureStore({
    reducer: counterSlice.reducer
});

//exporting the actions (autometically detectable as functions)
export const counterActions = counterSlice.actions;
export default store;