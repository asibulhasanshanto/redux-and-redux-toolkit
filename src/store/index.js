import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authenticationSlice from './auth';

//configuring the store with all the reducers
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer,
    }
});


export default store;