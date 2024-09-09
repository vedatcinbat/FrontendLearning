// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, reset, incrementByValue, decrementByValue} from '../redux/counterSlice';

function Counter() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByValue(10))}>Icrement 10</button>
            <button onClick={() => dispatch(decrementByValue(5))}>Decrement 5</button>
        </div>
    );
}

export default Counter;
