import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setTimeout(() => {
                console.log('Fetching Data');
            }, 2000)

            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
                setError(null);
            }catch (err) {
                setError(err);
            }finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;