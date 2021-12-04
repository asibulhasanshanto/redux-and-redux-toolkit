import { createSlice } from '@reduxjs/toolkit';

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

//exporting the actions (autometically detectable as functions)
export const counterActions = counterSlice.actions;

export default counterSlice;