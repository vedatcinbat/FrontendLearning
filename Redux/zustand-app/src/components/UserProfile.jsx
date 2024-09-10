import React, { useEffect } from 'react';
import useStore from '../zustand/store';

const UserProfile = () => {
    const user = useStore((state) => state.user);
    const fetchUser = useStore((state) => state.fetchUser);

    const randomId = Math.floor(Math.random() * 10) + 1;

    useEffect(() => {
        fetchUser(randomId); // Fetch a random user
    }, [fetchUser]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default UserProfile;