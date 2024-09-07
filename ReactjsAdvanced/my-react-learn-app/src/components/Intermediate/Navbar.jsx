import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { authState, logout } = useContext(AuthContext);
    return (
        <nav>
            <h1>My App</h1>
            {authState.isAuthenticated ? (
                <>
                    <p>Welcome, {authState.user.username}!</p>
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
        </nav>
    )
}