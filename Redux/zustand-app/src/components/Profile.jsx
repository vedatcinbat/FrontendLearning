import React from 'react';
import useStore from '../zustand/store';

const Profile = () => {
    const user = useStore(state => state.user);
    const setUserName = useStore(state => state.setUserName);

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <button onClick={() => setUserName('John Doe')}>Change Name : John Doe</button>
        </div>
    )
}

export default Profile;