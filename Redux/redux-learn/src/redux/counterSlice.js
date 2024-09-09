import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        reset(state) {
            state.count = 0;
        },
        incrementByValue(state, action) {
            state.count += action.payload;
        },
        decrementByValue(state, action) {
            state.count -= action.payload;
        }
    }
})

export const {increment, decrement, reset, incrementByValue, decrementByValue} = counterSlice.actions;
export default counterSlice.reducer;