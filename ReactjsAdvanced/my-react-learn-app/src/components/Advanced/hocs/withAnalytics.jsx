import React, {useState, useEffect} from 'react';

const withAnalytics = (WrappedComponent, pageName) => {
    return (props) => {
        useEffect(() => {
            // Simulate sending page view data to an analytics service
            console.log(`Page view recorded for: ${pageName}`);
        }, [pageName])

        return <WrappedComponent {...props} />
    }
}

export default withAnalytics;