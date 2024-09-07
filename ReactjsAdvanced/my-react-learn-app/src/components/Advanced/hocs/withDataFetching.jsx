import React, { useState, useEffect } from 'react';

const withDataFetching = (WrappedComponent) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url); // Fetch data from the provided URL
                    const result = await response.json();
                    setData(result);
                    setError(null);
                } catch (err) {
                    setError('Error fetching data');
                } finally {
                    setLoading(false);
                }
            }

            fetchData();
        }, [url])

        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>

        return <WrappedComponent data={data} {...props} />
    }
}

export default withDataFetching;