import {useEffect, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Component Rendered or updated. Current count : ${count}`);
    });

    
    // This will run only once when the component is mounted: One Time Before Mounting
    useEffect(() => {
        console.log('Component Mounted');
    }, [])

    // This will run only when the count changes: When a Specific or Prop Changes
    useEffect(() => {
        console.log('Count changed : ', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;