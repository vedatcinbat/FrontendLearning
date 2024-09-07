import React, {useState, useMemo} from 'react';

export default function ExpensiveCalculation({number}) {
    const slowFunction = (num) => {
        console.log('Calculating....');
        for(let i = 0; i < 1000000000; i++) {}
        return num * 2;
    }

    // Memoize the result of slowFunction
    const result = useMemo(() => slowFunction(number), [number]);

    return <div>Result: {result}</div>
}