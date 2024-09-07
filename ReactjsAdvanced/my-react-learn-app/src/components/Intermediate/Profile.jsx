import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function Profile() {
    // Consume the user context data using useContext
    //const { user, setUser } = useContext(UserContext);
    const { authState, logout } = useContext(AuthContext);

    return (
        <>
            {
                authState.isAuthenticated ? (
                    <>
                        <>
                            <h2>Profile</h2>
                            <p>UserName: {authState.user.username} - {authState.user.email}</p>
                            <p>Logged In: {authState.isAuthenticated ? 'Yes' : 'No'}</p>
                            <button onClick={logout}>Log Out</button>
                        </>
                    </>
                ) : (
                    <>
                        <p>Please login</p>
                        <button>
                            <Link to="/login">Login</Link>
                        </button>
                    </>
                )
            }
        </>
    )
}

export default Profile;
