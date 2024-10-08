import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            return state;
    }
}


const CounterReducer = () => {
    const [state, dispatch]  = useReducer(reducer, {count: 0})

    return (
        <>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </>
    )
}

export default CounterReducer;