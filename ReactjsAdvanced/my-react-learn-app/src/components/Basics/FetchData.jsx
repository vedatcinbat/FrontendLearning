import { useState, useEffect } from 'react'

const FetchData = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        // Fake API call with 1 sec delay
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data));
        }, 1000)
    }, [])

    return (
        <>
        <div>Fetch User Data</div>
            {users ? (
                <>
                    <h1>Users</h1>
                    <div>
                        {users.map(user => (
                            <div key={user.id}>User: {user.name} {user.username} {user.email} | Company: {user.company.name}</div>
                        ))}
                    </div>
                </>
            ) : (<p>Loading...</p>)}
        </>
    )
}

export default FetchData;