import React from 'react';
import useFetch from './CustomHooks/useFetch';
const DataComponent = () => {
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts');


    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataComponent;