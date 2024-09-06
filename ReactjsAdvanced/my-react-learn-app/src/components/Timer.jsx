import { useState, useEffect } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Return the cleanup function
        return () => {
            clearInterval(intervalId);  // Cleanup the interval on unmount
        };
    }, []);  // Empty dependency array means this runs once when the component mounts

    return <p>Seconds: {seconds}</p>;
}
