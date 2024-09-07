import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Settings() {
    const { authState, logout } = useContext(AuthContext);
    return (
        <>
            {authState.isAuthenticated ? (
                <>
                    <h2>Settings</h2>
                    <p>UserName: {authState.user.username} - {authState.user.email}</p>
                    <p>Logged In: {authState.isAuthenticated ? 'Yes' : 'No'}</p>
                    <button onClick={logout}>Log Out</button>
                </>
            ) : (
                <>
                    <p>Please login</p>
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                </>
            )}
        </>
    )
  }