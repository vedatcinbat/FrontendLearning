import React from 'react';
import withAuthProtection from './withAuthProtection';

const UserProfile = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Protected Route</p>
        </div>
    )
}

export default withAuthProtection(UserProfile);