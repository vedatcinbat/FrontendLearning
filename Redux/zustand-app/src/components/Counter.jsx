import React from 'react';
import useStore from '../zustand/store';

const Counter = () => {
    const {count, increment, decrement} = useStore();

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;