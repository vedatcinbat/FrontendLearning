import React, {useRef} from 'react';

export default function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Focus Me" />
            <button onClick={handleFocus}>Focus Input</button>
        </>
    )
}