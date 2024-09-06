import { useState, useEffect } from 'react';

export default function WindowResizer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup function: remove the event listener before the effect re-runs or component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);  // Runs only once when the component mounts
  
    return <p>Window width: {windowWidth}</p>;
  }
  