import React, { useState, useEffect } from 'react';

const useApiCall = (url, method = 'GET', body = null, headers = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const options = {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers
                    }
                };

                if(method !== 'GET' && body) {
                    options.body = JSON.stringify(body);
                }

                const response = await fetch(url, options);

                if(!response.ok) {
                    throw new Error('Request failed');
                }

                const result = await response.json();
                setData(result);
                setError(null);

            } catch (err) {
                setError(err.message || 'Something went wrong');
                setData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url, method, body]);

    return { data, loading, error };
}

export default useApiCall;