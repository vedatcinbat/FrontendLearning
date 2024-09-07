import React from "react";
import useApiCall from "./CustomHooks/useApiCall";

const GetUsersData = () => {
    const { data, loading, error } = useApiCall("https://jsonplaceholder.typicode.com/users", "GET");

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )

}

export default GetUsersData;