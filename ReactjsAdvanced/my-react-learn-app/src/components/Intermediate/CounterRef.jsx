import React, { useState, useRef} from 'react';

export default function CounterRef() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0); // A ref to store the number of renders


    renderCount.current++;

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <p>This component has rendered {renderCount.current} times</p>
        </>
    )
}